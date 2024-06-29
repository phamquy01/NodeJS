import * as insertController from "../controllers/index";
import express from "express";

const insertRouter = express.Router();

insertRouter.get("/", insertController.insert);

export default insertRouter;
