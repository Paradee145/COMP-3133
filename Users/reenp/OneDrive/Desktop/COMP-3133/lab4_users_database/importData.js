const mongoose = require("mongoose");
const fs = require("fs");
const User = require("./models/User");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const users = JSON.parse(fs.readFileSync("UsersData.json", "utf-8"));

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
