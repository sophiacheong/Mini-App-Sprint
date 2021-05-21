const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dbHelpers = require('./database/dbHelpers.js')
const port = 3000;
const path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static('public'))

app.listen(port, () => console.log(`LISTENING AT PORT ${port}`))

app.get('/api', (req, res) => {
  dbHelpers.get((err, results) => {
    if (err) res.status(404).send(err)
    else res.status(200).send(results)
  })
})

app.post('/api', (req, res) => {
  dbHelpers.post(req, (err) => {
    if (err) res.status(404).send(err)
    else res.status(200).send('Posted!')
  })
})