
const mongoose = require('mongoose');

// Create a schema that defines the structure of a person.
const personSchema = new mongoose.Schema({
    // Name is required for every person.
    name: {
        type: String,
        required: true
    },

    // Age must be a number.
    age: {
        type: Number,
        default: 0
    },

    // Favourite foods must be an array of strings.
    favoriteFoods: {
        type: [String],
        default: []
    }
});

// Create the Person model from the schema.
const Person = mongoose.model('Person', personSchema);

// Export the model so other files can use it.
module.exports = Person;
