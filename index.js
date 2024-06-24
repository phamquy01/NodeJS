import express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./src/routers";
import dotenv from "dotenv";
import "./connection_database";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));

router(app);

const PORT = process.env.PORT || 8888;
const listener = app.listen(PORT, () => {
  console.log("server is running port " + listener.address().port);
});
