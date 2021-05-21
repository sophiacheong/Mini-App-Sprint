const db = require('./dbConnect.js');

const dbHelpers = {
  get: (callback) => {
    db.query(`SELECT * FROM customer`, (err, results) => { callback(err, results) })
  },
  post: (req, callback) => {
    var { name, email, password, address, phone, card_number, expiry, cvv, zipcode } = req.body
    db.query(`INSERT INTO customer (name, email, password, address, phone, card_number, expiry, cvv, zipcode) VALUES ('${name}', '${email}', '${password}', '${address}', ${phone}, ${card_number}, ${expiry}, ${cvv}, ${zipcode})`, (err) => {
      callback(err);
    })
  },
}

module.exports = dbHelpers;