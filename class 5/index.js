// external module
const express = require("express");

// local module

// main code
const app = express();
const PORT = 3002;

app.use((req, res, next) => {
  console.log(req.url, req.method);
  
  console.log("Running in middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Running in middleware 2");
  res.send(`<p>server running in http://localhost:${PORT}</p>`)
});
// server listen
app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});