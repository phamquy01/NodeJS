import { notAuth } from "./handle_error";

export const isAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1") return notAuth("you need permission is admin", res);
  next();
};

export const isCreatedOrAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1" && role_code !== "R2")
    return notAuth("you need permission is admin or creator", res);
  next();
};
