import * as userController from "../controllers/index";
import express from "express";
import verifyToken from "../middlewares/verify_token";

const userRouter = express.Router();

userRouter.get("/", [verifyToken], userController.getCurrent);

export default userRouter;
