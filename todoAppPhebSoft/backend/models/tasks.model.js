const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const taskScehma = mongoose.Schema({
  // id:  { type: String, required: true, unique: true, lowercase: true},
  Description: String,
  Status: String,
  CreatedBy: String,
});

// taskScehma.plugin(uniqueValidator);

module.exports = mongoose.model("Task", taskScehma);
