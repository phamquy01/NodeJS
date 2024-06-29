import userRouter from "./user";
import authRouter from "./auth";
import insertRouter from "./insert";
import bookRouter from "./book";
import { notFound } from "../middlewares/handle_error";

const router = (app) => {
  app.use("/api/v1/book", bookRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/auth", authRouter);

  app.use("/", notFound);
};

export default router;
