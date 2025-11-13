// core module
const path = require("path");

// external module
const express = require("express");

// local module
const userRouter = require("./routes/userRoute");
const hostRouter = require("./routes/hostRoute");

// Initalize variable
const app = express();
const PORT = 2005;

// main code
app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

// server listener
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
