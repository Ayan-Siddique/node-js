const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true, "Title is require"],
    trim:true
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:[true, "User is require"]
  },
  subTodo:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ]
}, {timestamps:true});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
