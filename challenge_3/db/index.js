const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let repo = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  address: String,
  phone_number: Number,
  card_number: Number,
  expiration_date: Number,
  CVV: Number,
  zip_code: Number
})