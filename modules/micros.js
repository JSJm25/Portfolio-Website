const { express, app, fs, path, cheerio, multer } = require('./dependencies.js');
const { loadHtml } = require('./utilities.js');
require('dotenv').config()

const timeStamp = app.get('/micros/timestamp/time', (req, res) => {
    const d = new Date();
    const ms = d.valueOf();
    const string = d.toLocaleString();
    res.send({
        "Time Stamp": d,
        "Value Of": ms,
        "Locale String": string
    });
});

const analyse = app.post('/micros/metadata/analysis', multer().single("uploadedFile"), (req, res) => {
    if (req.file) {

        const { originalname, mimetype, size } = req.file;
        const mb = parseFloat((size/1048576).toFixed(2));
        const sizeString = `${mb}Mb`
        const responseObject = {
          name: originalname,
          type: mimetype,
          size: sizeString,
        }
        res.json(responseObject);
      } else {
        res.json({error: 'No file uploaded'})
      }
});

module.exports = {
    timeStamp,
    analyse
}