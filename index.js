const { express, app, fs, path, cheerio } = require('./scripts/dependencies.js');

require('./scripts/micros.js');

require('dotenv').config()

//Variables
const _dir = __dirname + '/views/';

//functions
function loadHtml(filePath)
{
    const html = fs.readFileSync(filePath, "utf-8");
    return cheerio.load(html);
};
app.use(express.json());

app.use('/public', express.static(`${process.cwd()}/public`));
const logger = app.use((req, res, done) =>{
    let d = new Date();
    console.log(`${req.method}    ${req.path} - ${req.ip} at ${d}`);
    done();
});
app.use((req, res, next) => {
    const headerPath = `${__dirname}/views/templates/header.html`;
    const $header = loadHtml(headerPath);
    req.headerHTML = $header.html();
    next();
});

app.get('/', (req, res) => {
    const path = `${_dir}index.html`
    const $ = loadHtml(path);
    $('#header').replaceWith(req.headerHTML);
    res.send($.html());
});

app.get('/:path', (req, res) => {
    const p = req.params.path;
    const path = `${_dir}${p}.html`;
    const $ = loadHtml(path);
    $('#header').replaceWith(req.headerHTML);
    res.send($.html());
}); //This function alone will navigate most of the site.


//Listening Function
const listener = app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}/`);
});