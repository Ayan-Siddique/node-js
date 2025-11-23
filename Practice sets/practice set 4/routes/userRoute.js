// external module
const express = require("express");
const { homeCard } = require("./adminRoute");

// variable
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.render("home", {homeCard : homeCard, current : 'home'});
});

userRouter.get("/movies", (req, res, next) => {
  res.render("movies", {current : 'movies'});
});

userRouter.get("/series", (req, res, next) => {
  res.render("series", {current : 'series'});
});

userRouter.get("/my-list", (req, res, next) => {
  res.render("myList", {current : 'myList'})});


exports.userRouter = userRouter;
