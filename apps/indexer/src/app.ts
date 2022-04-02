import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", (req, res) => {
  res.send("Da fuck you calling this endpoint for???");
});

app.use(function (req, res, next) {
  next(createError(404));
});

export default app;
