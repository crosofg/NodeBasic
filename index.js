const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 9000


app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

var { insertArticles } = require('./db/article.js')
var { getFilters } = require('./controllers/article')

app.get('/getFilters', getFilters)
app.post('/getFilterData', getFilters)


app.get('/sync', (req, res) => {

    if (typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(__dirname + "/data/ArticleMaster.xlsx");

    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];

    var articleJson = XLSX.utils.sheet_to_json(worksheet);

    insertArticles(articleJson);
    res.send("Done")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})