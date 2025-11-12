const express = require("express");
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

app.post("/contact-us", (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", ()=>{
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    
  })

  res.send(`<h1>Thanks for details</h1>`)
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
