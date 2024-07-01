import db from "../models/index";
import data from "../../data/data.json";
import { generateCode } from "../helpers/fn";
export const insertData = () =>
  new Promise(async (resolve, reject) => {
    try {
      const categories = Object.keys(data);
      categories.forEach(async (category) => {
        await db.Category.create({
          code: generateCode(category),
          value: category,
        });
      });

      const books = Object.entries(data);
      books.forEach((book) => {
        book[1]?.map(async (item) => {
          await db.Book.create({
            id: item.upc,
            title: item.bookTitle,
            price: +item.bookPrice,
            available: +item.available,
            image: item.imageUrl,
            description: item.bookDescription,
            category_code: generateCode(book[0]),
          });
        });
      });
      resolve("ok");
    } catch (error) {
      reject(error);
    }
  });
