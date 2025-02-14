const express = require('express');
const app = express();
require('dotenv').config();

const _dir = __dirname + '/views/index.html';

app.use(express.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use((req, res, done) =>{
    let d = new Date();
    console.log(`${req.method}    ${req.path} - ${req.ip} at ${d}`);
    done();
});

app.get('/', (req, res) => {
    res.sendFile(_dir);
})

//Listening Function
const listener = app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}/`);
});