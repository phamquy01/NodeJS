const userRouter = require("express").Router();
const userController = require("../controllers/user");

userRouter.get("/", userController.getUserController);

module.exports = userRouter;
