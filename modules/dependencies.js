const express = require('express');
const app = express();
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const multer = require('multer');

module.exports = {
    express,
    app,
    fs,
    path,
    cheerio,
    multer
}