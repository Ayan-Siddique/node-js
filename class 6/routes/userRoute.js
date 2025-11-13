// core module
const path = require("path");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

userRouter.get("/dash", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "user.html"));
});


module.exports = userRouter;
