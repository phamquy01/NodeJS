import userRouter from "./user";
import authRouter from "./auth";

const router = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/auth", authRouter);

  return app.use("/", (req, res) => {
    res.send("server running");
  });
};

export default router;
