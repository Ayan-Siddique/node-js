// external module
const express = require("express");

// variable
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.render("home");
});

userRouter.get("/movies", (req, res, next) => {
  res.render("movies");
});

userRouter.get("/series", (req, res, next) => {
  res.render("series");
});

userRouter.get("/my-list", (req, res, next) => {
  res.render("myList");
});

exports.userRouter = userRouter;
