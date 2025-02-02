const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");
const fs = require("fs");
require("dotenv").config();


const connectDB = require("./config/db");

// Read JSON file (Ensure `restaurants.json` is in the project folder)
const restaurants = JSON.parse(fs.readFileSync("restaurants.json", "utf-8"));

const seedDatabase = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        await Restaurant.deleteMany(); // Clear existing data
        await Restaurant.insertMany(restaurants); // Insert new data
        console.log("Database Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("Error Seeding Database:", error);
        process.exit(1);
    }
};

seedDatabase();
