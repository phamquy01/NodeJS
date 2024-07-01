import * as bookController from "../controllers/index";
import express from "express";
import { isCreatedOrAdmin } from "../middlewares/verify_role";
import verifyToken from "../middlewares/verify_token";
import uploadCloud from "../middlewares/uploader";

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks);

bookRouter.use(verifyToken);
bookRouter.use(isCreatedOrAdmin);
bookRouter.post("/", uploadCloud.single("image"), bookController.createBook);
bookRouter.put("/", uploadCloud.single("image"), bookController.updateBook);
bookRouter.delete("/", bookController.deleteBook);

export default bookRouter;
