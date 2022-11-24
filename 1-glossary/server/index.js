require("dotenv").config();
const axios = require("axios")
const express = require("express");
const path = require("path");
const {WordAndDef} = require("./db")

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/glossary', (req, res) => {
  WordAndDef.find({}).sort({word: 1}).exec()
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send());
});

app.post('/glossary', (req, res) => {
  if (Object.keys(req.body).includes('_id')) {
    WordAndDef.deleteOne(req.body)
      .then((response) => res.status(201).send())
      .catch((err) => {
        console.log(err);
        res.status(400).send()
      });
  } else {
    WordAndDef.create(req.body)
      .then((response) => res.status(201).send())
      .catch((error) => {
        console.log(error)
        res.status(400).send();
      });
  }
})

// app.patch(/* determine params*/, (err, response) {

// });

// app.delete('/glossary', (req, res) => {
//   // WordAndDef.deleteOne(res.body)
//   console.log(req.header);
//   console.log('working');
//   res.send(':)');
// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
