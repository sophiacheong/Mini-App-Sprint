const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('/public'))

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))