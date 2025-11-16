// core module

// external module
const express = require("express");

// local module
const { userRouter } = require("./routes/userRoute");
const { adminRouter } = require("./routes/adminRoute");
// variable
const app = express();
const PORT = 2005;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(userRouter);
app.use('/admin',adminRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
