import { internalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
import {
  title,
  price,
  available,
  image,
  category_code,
  bookid,
  bookids,
  filename,
} from "../helpers/joi_schema.js";
import joi from "joi";
const cloudinary = require("cloudinary").v2;

export const getBooks = async (req, res) => {
  try {
    const response = await services.getBooks(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export const createBook = async (req, res) => {
  try {
    const fileData = req.file;
    const { error } = joi
      .object({ title, price, available, image, category_code })
      .validate({ ...req.body, image: fileData?.path });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
      return badRequest(error.details[0].message, res);
    }
    const response = await services.createNewBook(req.body, fileData);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export const updateBook = async (req, res) => {
  try {
    const fileData = req.file;
    const { error } = joi
      .object({ bookid })
      .validate({ bookid: req.body.bookid });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
      return badRequest(error.details[0].message, res);
    }
    const response = await services.updateBook(req.body, fileData);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { error } = joi.object({ bookids, filename }).validate(req.query);
    if (error) return badRequest(error.details[0].message, res);
    const response = await services.deleteBook(
      req.query.bookids,
      req.query.filename
    );
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
