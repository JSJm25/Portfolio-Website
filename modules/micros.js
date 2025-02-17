const { express, app, fs, path, cheerio } = require('./dependencies.js');
require('dotenv').config()

const timeStamp = app.get('/micros/timestamp', (req, res) => {
    const d = new Date()
    res.send({
        "Time Stamp": d
    })
});

module.exports = {
    timeStamp
}