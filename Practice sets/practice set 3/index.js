const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userHandler");
const app = express();
const PORT = 3006;

app.use(bodyParser.urlencoded())
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
