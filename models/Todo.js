// yaha pe schema bana rahe hai.. jo ki hm insert krnge database mein...(database k andr me kch to insert krna hga na....to ye schema bana rhe hai insert hone wala )
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
