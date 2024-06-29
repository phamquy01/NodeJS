import { title } from "../helpers/joi_schema";
import db from "../models/index";
import { Op } from "sequelize";
import { v4 as generateId } from "uuid";

export const getBooks = ({ page, limit, order, name, available, ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, nest: true };
      const offset = !page || +page <= 1 ? 0 : +page - 1;
      const fLimit = +limit || +process.env.LIMIT_BOOK;
      queries.offset = offset * fLimit;
      queries.limit = fLimit;
      if (order) queries.order = [order];
      if (name) query.title = { [Op.substring]: name };
      if (available) query.available = { [Op.between]: available };

      const response = await db.Book.findAndCountAll({
        where: query,
        ...queries,
        attributes: {
          exclude: ["category_code"],
        },
        include: [
          {
            model: db.Category,
            as: "categoryData",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got" : "can not found book",
        bookData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

// create
export const createNewBook = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findOrCreate({
        where: { title: body?.title },
        defaults: {
          ...body,
          id: generateId(),
        },
      });

      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "created" : "can not create a new book",
      });
    } catch (error) {
      console.error("Error in createNewBook:", error);
      reject(error);
    }
  });
