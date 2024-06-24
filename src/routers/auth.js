import * as authController from "../controllers/index";

const authRouter = require("express").Router();

authRouter.post("/register", authController.register);

export default authRouter;
