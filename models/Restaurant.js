const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    restaurant_id: { type: String, required: true },
    name: { type: String, required: true },
    cuisine: { type: String, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

