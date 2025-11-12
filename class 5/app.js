const express = require("express");
const app = express();
const PORT = 3005;

app.get("/", (req, res, next) => {
  res.send(`<h1>Home page</h1>
    <a href="/profile">Go to profile</a> </br>
    <a href="/about">Go to about</a> </br>
    <a href="/contact">Go to contact</a>`);
});

app.get("/profile", (req, res, next) => {
  res.send(`<h1>Profile Page</h1>
    <a href="/">Go to home</a>`);
});

app.get("/about", (req, res, next) => {
  res.send(`<h1>About page</h1>
    <a href="/">Go to home</a>`);
});

app.get("/contact", (req, res, next) => {
  res.send(`<h1>Contact page</h1>
    <a href="/">Go to home</a>`);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
