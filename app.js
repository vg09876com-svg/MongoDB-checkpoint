
require('dotenv').config();

const mongoose = require('mongoose');
const Person = require('./person');

// Connect to MongoDB Atlas using the URI stored in .env.
async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connected successfully!');

        // Close the connection after confirming that it works.
        await mongoose.disconnect();
        console.log('MongoDB disconnected.');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

// Start the application.
startApp();
