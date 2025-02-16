const { express, app, fs, path, cheerio } = require('./dependencies.js');
require('dotenv').config()

const logger = app.use((req, res, done) =>{
    let d = new Date();
    console.log(`${req.method}    ${req.path} - ${req.ip} at ${d}`);
    done();
});

module.exports = {
    logger
}