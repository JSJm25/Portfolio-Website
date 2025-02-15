const express = require('express');
const app = express();
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

module.exports = {
    express,
    app,
    fs,
    path,
    cheerio
}