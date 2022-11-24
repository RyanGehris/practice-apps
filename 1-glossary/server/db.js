require('dotenv').config()
console.log(process.env.DB_NAME);
const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: { type: String, unique: true},
  definition: String
})
// 3. Export the models
const WordAndDef = mongoose.model('WordAndDef', glossarySchema)
// 4. Import the models into any modules that need them


// find all function
// find()

// save function
// save()

// edit values function
// replaceOne()

// delete value function
// deleteOne()

exports.WordAndDef = WordAndDef;
