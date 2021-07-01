const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

db.once('open', () => { console.log('db connected'); });

const repo = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  phone_number: Number,
  card_number: Number,
  expiration_date: Number,
  CVV: Number,
  zip_code: Number,
});

module.exports = { db, repo };
