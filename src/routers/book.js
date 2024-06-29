import * as bookController from "../controllers/index";
import express from "express";
import { isAdmin } from "../middlewares/verify_role";
import verifyToken from "../middlewares/verify_token";

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks);

bookRouter.use(verifyToken);
bookRouter.use(isAdmin);
bookRouter.post("/", bookController.createBook);

export default bookRouter;
