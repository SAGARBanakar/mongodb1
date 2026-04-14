const Task = require("../models/Task");

// create
exports.createTask = async (req, res) => {
  const data = await Task.create(req.body);
  res.json(data);
};

// get
exports.getTasks = async (req, res) => {
  const data = await Task.find({ isDeleted: false });
  res.json(data);
};

// delete
exports.deleteTask = async (req, res) => {
  const data = await Task.findByIdAndDelete(req.params.id);
  res.json(data);
};