/* eslint-disable camelcase */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { db, Form } = require('./db/index');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

app.post('/f1', (req, res) => {
  const formsDB = db.collection('forms');
  const {
    name, email, password, address, phone_number, card_number, expiration_date, CVV, zip_code,
  } = req.body;

  const newRepo = new Form({
    name,
    email,
    password,
    address,
    phone_number,
    card_number,
    expiration_date,
    CVV,
    zip_code,
  });

  formsDB.insertOne(newRepo, (err, results) => {
    if (err) res.status(404).send(err);
    else res.status(200).send('Sucess!');
  });
});
