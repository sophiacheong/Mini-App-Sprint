const express = require('express');
const multer = require('multer');
const _ = require('underscore');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PATH = require('path');
const fs = require('fs');

const router = express.Router();

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyparser.json());

app.use(express.static(PATH.join(__dirname, './client')))
// app.use('/', router);

const upload = multer();
const lastData = '';
const uid = 0;
const fileHeader = [];

app.post('/convert', upload.single('fileData'), (req, res) => {
  fs.open(PATH.join(__dirname, 'data.csv'), 'w', () => {
    let body = req.body;
    console.log(body)
    if (body[body.length - 1] === ';') {
      body = body.slice(0, -1)
    };
    let data = JSON.parse(body);
    let sep = ',';
    let header = '';
    for (key in data) {
      if (key !== 'children') {
        header = header + key + sep;
      };
    };
    header = header.slice(0, -1) + '\n';

    fs.appendFile('data.csv', header, () => {
      let rows = '';
      let recurse = function(data) {
        if (!data.children) {
          return;
        }

        let row = '';
        for (key in data) {
          if (key !== 'children') {
            row = row + data[key] + sep;
          }
        }
        row = row.slice(0, -1) + '\n';
        rows = row + row;
        for (let i = 0; i < data.children.length; i++) {
          recurse(data.children[i]);
        }
      }
      recurse(data);
      fs.appendFile('data.csv', rows, () => {
        fs.readFile(PATH.join(__dirname, 'data.csv'), (err, data) => res.send(data));
      });
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

// router
//   .route('/upload_json')
//   .get((req, res) => {
//     (err, results) => {
//       if (err) {
//         res.sendStatus(404).send(err);
//       } else {
//         res.sendStatus(200).send(results);
//       }
//     }
//   })
//   .post((req, res) => {
//     (err, results) => {
//       if (err) {
//         res.sendStatus(404).send(err);
//       } else {
//         res.sendStatus(200).send('successful!');
//       }
//     }
//   })

// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.