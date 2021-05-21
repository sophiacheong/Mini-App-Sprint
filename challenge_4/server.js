const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const port = 3000;

const app = express();
const router = express.Router;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, './client/dist')));

app.listen(port, () => {console.log(`LISTENING AT PORT ${port}`)});