const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  // id:  { type: String, required: true, unique: true, lowercase: true},
  Username: String,
  canCreate: String,
  canModify: String,
  canDelete: String,
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
