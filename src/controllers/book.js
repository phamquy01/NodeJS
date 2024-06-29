import { internalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
import {
  title,
  price,
  available,
  image,
  category_code,
} from "../helpers/joi_schema.js";
import joi from "joi";

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
    const { error } = joi
      .object({ title, price, available, image, category_code })
      .validate(req.body);
    if (error) return badRequest(error.details[0].message, res);
    const response = await services.createNewBook(req.body);

    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
