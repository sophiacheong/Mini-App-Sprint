const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { db, repo } = require('./db/index');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

app.post('/f1', (req, res) => {
  const Form = mongoose.model('Form', repo);
  const { name, email, password } = req.body;

  const newRepo = new Form({
    name,
    email,
    password,
    address: '',
    phone_number: 0,
    card_number: 0,
    expiration_date: 0,
    CVV: 0,
    zip_code: 0,
  });

  db.Form.insert(newRepo, (err, results) => {
    if (err) res.status(404).send(err);
    else res.status(200).send('Sucess!');
  });
});
