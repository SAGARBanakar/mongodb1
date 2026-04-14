const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  age: { type: Number, min: 18 },
  email: { type: String, required: true },
  department: String,
  skills: [String],
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("Intern", internSchema);