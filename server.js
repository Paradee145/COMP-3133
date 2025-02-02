const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./Restaurant'); // Import the Restaurant model

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurantDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

// REST API to return all restaurant details
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// REST API to return restaurants by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisine: cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// REST API to return restaurants with sorting
app.get('/restaurants', async (req, res) => {
    try {
        const sortBy = req.query.sortBy || 'ASC';
        const sortOrder = sortBy === 'DESC' ? -1 : 1;
        const restaurants = await Restaurant.find()
            .select('id cuisine name city restaurant_id')
            .sort({ restaurant_id: sortOrder });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// REST API to return Delicatessen restaurants not in Brooklyn
app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } })
            .select('cuisine name city -_id')
            .sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});