require("dotenv").config({ path: ".env.local" });

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// ✅ THIS LINE MUST EXIST
connectDB();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});