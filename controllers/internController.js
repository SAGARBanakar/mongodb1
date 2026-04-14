const Intern = require("../models/Intern");

// create
exports.createIntern = async (req, res) => {
  const data = await Intern.create(req.body);
  res.json(data);
};

// get all
exports.getInterns = async (req, res) => {
  const data = await Intern.find();
  res.json(data);
};

// update
exports.updateIntern = async (req, res) => {
  const data = await Intern.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};