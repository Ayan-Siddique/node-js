// external module
const express = require("express");

// variable
const adminRouter = express.Router();
const homeCard = [];

adminRouter.get("/", (req, res, next) => {
  res.render("admin");
});

adminRouter.get("/add-cards", (req, res, next) => {
  res.render("addCard");
});

adminRouter.get("/success", (req, res, next) => {
  res.render("success");
});

adminRouter.post("/add-cards", (req, res, next) => {
  console.log(req.body);
  homeCard.push(req.body);
  return res.redirect("success");
});
exports.adminRouter = adminRouter;
exports.homeCard = homeCard;
