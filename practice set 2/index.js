const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3006;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the server</h1>
    <a href="/contact-us">Get Connect with us</a>`);
});

app.get("/contact-us", (req, res) => {
  res.send(`<form action="/contact-us" method="POST">
  <input type="text" name ="name" placeholder="Enter your name">
  <input type="tel" name ="phone" placeholder="Enter your phone">
  <input type="submit" value="Submit">
</form>`);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res) => {
  console.log(req.body);
  
  res.send(`<h1>Thanks for details</h1>`);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
