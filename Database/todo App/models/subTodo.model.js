const mongoose = require("mongoose");

const subTodoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Write Someting....."],
      trim:true
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is require"],
    },
  },
  { timeStamps: true },
);

const SubTodo = mongoose.model("SubTodo", subTodoSchema);
module.exports = SubTodo;
