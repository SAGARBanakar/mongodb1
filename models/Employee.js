const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  salary: Number,
  department: String
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);