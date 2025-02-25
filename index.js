const { express, app, fs, path, cheerio } = require('./modules/dependencies.js');
const { loadHtml, pageTitles, insertHeader } = require('./modules/utilities.js');

require('./modules/micros.js');
require('dotenv').config()

//Variables

const _dir = __dirname + '/views/';

//Use Methods

app.use(express.json());

app.use('/public/', express.static(`${__dirname}/public/`));

app.use((req, res, next) =>{
    let d = new Date();
    console.log(`${req.method}    ${req.path} - ${req.ip} at ${d}`);
    next();
}); // Logs requests

 // Use method that that assigns the header element to the request object so It can be appended to any html response
app.use((req, res, next) => {
    const headerPath = `${_dir}templates/header.html`;
    const $header = loadHtml(headerPath);
    req.headerHTML = $header('#header').html();
    next();
});

//get methods
const entryPoint = app.get('/', (req, res) => {
    const path = `${_dir}index.html`
    const $ = loadHtml(path);
    insertHeader($, req.headerHTML, 'home', "home");
    res.send($.html());
}); // entry point for site


const navigation = app.get('/:path', (req, res) => {
    console.time();
    const p = req.params.path;
    const path = `${_dir}${p}.html`;
    const $ = loadHtml(path);
    const titleString = pageTitles(p);
    insertHeader($, req.headerHTML, p, titleString);
    res.send($.html());
    console.timeEnd();
}); //Navigate the main pages on the site

const project = app.get('/project/:path', (req, res) => {
    console.time();
    const p = req.params.path;
    const path = `${_dir}${p}.html`;
    const $ = loadHtml(path);
    const titleString = pageTitles(p);
    insertHeader($, req.headerHTML, p, titleString, false);
    res.send($.html());
    console.timeEnd();
})

//Listening Function

const listener = app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}/`);
});