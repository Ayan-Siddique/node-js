const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
      lowercase: true,
      trim:true
    },
    email: {
      type: String,
      required: [true, "Email is require"],
      lowercase: true,
      unique: [true, "Email already exist"],
      trim:true
    },
    password: {
      type: String,
      required: [true, "password is require"],
      minLength: [8, "Password must contain atleast 8 characters"],
      trim:true
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
