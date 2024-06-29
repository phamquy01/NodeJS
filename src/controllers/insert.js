import { internalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
import { email, password } from "../helpers/joi_schema";
import joi from "joi";

export const insert = async (req, res) => {
  try {
    const response = await services.insertData()
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

