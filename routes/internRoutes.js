const express = require("express");
const router = express.Router();

const {
  createIntern,
  getInterns,
  updateIntern
} = require("../controllers/internController");

router.post("/", createIntern);
router.get("/", getInterns);
router.put("/:id", updateIntern);

module.exports = router;