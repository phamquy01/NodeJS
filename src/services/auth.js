import db from "../models/index";
import bcrypt from "bcryptjs";

const hashPassword = (password) => {
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
export const register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Users.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
        },
      });
      console.log(response);
      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "register is successfully" : "email is used",
      });
      resolve({
        err: 0,
        mes: 'resgister service',
      });
    } catch (error) {
      reject(error);
    }
  });
