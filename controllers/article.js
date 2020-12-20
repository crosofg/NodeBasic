var { getFiltersFromDB } = require('../db/article')


function getFilters(req, res) {


    var { program, request, category } = req.body

    if (request == 'category') {
        getFiltersFromDB('Category', {}, function (err, results) {
            res.send(JSON.stringify({ key: 'Category', results }), null, 2)
        })
    } else if (request == 'programs') {
        getFiltersFromDB("ProgramCode", category, function (err, results) {
            res.send(JSON.stringify({ key: 'Program', results }), null, 2)
        })
    }
    else if (request == 'articles') {
        getFiltersFromDB("Article", program, function (err, results) {
            res.send(JSON.stringify({ key: 'Article', results }), null, 2)
        })
    }

}


module.exports = { getFilters }