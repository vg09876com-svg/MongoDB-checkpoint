
require('dotenv').config();

const mongoose = require('mongoose');
const Person = require('./person');

// Connect to MongoDB and test document updates.
async function runTests() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully!\n');

        // Find Sarah so we can update her favourite foods.
        const sarah = await Person.findOne({ name: 'Sarah' });

        if (sarah) {
            // Add hamburger to Sarah's favourite foods.
            sarah.favoriteFoods.push('hamburger');

            // Save the updated document to MongoDB.
            await sarah.save();

            console.log('1. Updated Sarah favourite foods:');
            console.log(sarah.favoriteFoods);
        } else {
            console.log('Sarah was not found.');
        }

        // Find Mary and change her age to 20.
        const updatedMary = await Person.findOneAndUpdate(
            { name: 'Mary' },
            { age: 20 },
            { new: true, runValidators: true }
        );

        console.log('\n2. Mary after updating her age:');
        console.log(updatedMary);

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Close the database connection after the tests.
        await mongoose.disconnect();
        console.log('\nDatabase connection closed.');
    }
}

// Run the update tests.
runTests();
