import userRouter from "./user";
import authRouter from "./auth";
import { notFound } from "../middlewares/handle_error";

const router = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/auth", authRouter);

  app.use("/", notFound);
};

export default router;
