require("dotenv").config();
const axios = require("axios")
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json())
app.use(express.urlencoded());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/glossary', (req, res) => {
  console.log('YOURE IN');
  res.send([{word: 'wait', definition: 'i need to set up the DB'}]);
});

// app.post(/* determine params*/, (err, response) {

// });

// app.patch(/* determine params*/, (err, response) {

// });

// app.delete(/* determine params*/, (err, response) {

// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
