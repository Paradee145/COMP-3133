require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(8081, () => console.log("Server running on port 8081"));
