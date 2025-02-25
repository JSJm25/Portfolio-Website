const { express, app, fs, path, cheerio } = require('./dependencies.js');
require('dotenv').config()

function loadHtml(filePath)
{
    const html = fs.readFileSync(filePath, "utf-8");
    return cheerio.load(html);
};

function pageTitles(string)
{
    switch(string)
    {
        case 'micros':
            return "Micro Services";
        case 'contact':
            return 'Contact Me';
        case 'projects':
            return 'Projects';
        case 'timestamp':
            return "TimeStamp Microservice";
        case 'metadata':
            return "File MetaData Microservice";
        default:
            return "Jeffrey's Portfolio";
    }
}

const insertHeader = ($doc, header, navID, title, bool = true) => {
    $doc('#header').html(header);
    if(bool) $doc(`#${navID}`).remove();
    $doc("#page-title").text(title);
}
module.exports = {
    loadHtml,
    pageTitles,
    insertHeader
}