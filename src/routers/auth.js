import * as authController from "../controllers/index";

const authRouter = require("express").Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;
