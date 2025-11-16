// external module
const express = require("express");

// variable
const adminRouter = express.Router();

adminRouter.get("/", (req, res, next) => {
  res.render("admin");
});

adminRouter.get("/add-cards", (req, res, next) => {
  res.render("addCard");
});

exports.adminRouter = adminRouter;
