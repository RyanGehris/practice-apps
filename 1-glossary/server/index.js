require("dotenv").config();
const axios = require("axios")
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// use.get(/* determine params*/, (err, response) {

// });

// use.post(/* determine params*/, (err, response) {

// });

// use.patch(/* determine params*/, (err, response) {

// });

// use.delete(/* determine params*/, (err, response) {

// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
