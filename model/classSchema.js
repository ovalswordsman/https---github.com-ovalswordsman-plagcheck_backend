const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  assignments: [
    {
      question: {
        type: String,
        required: true,
      },
    },
  ],
});

const userClass = mongoose.model("CLASS", userSchema);
module.exports = userClass;
