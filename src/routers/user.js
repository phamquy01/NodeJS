import * as userController from "../controllers/index";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_role";

const userRouter = express.Router();

// userRouter.use(verifyToken);
// userRouter.use(isAdmin);

userRouter.get("/", [verifyToken, isAdmin], userController.getCurrent);

export default userRouter;
