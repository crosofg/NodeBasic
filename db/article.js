var db = require('./connect.js')
var articleMasterCollection = db.collection('test')

function insertArticles(articles) {
    return db.test.insertMany(articles)
}


function getFiltersFromDB(distinct_field, val, cb) {

    // articleMasterCollection.find(function (err, res) {
    //     cb(res)
    // })

    if (distinct_field == 'Article') {
        console.log(val)
        return articleMasterCollection.find({ 'ProgramCode': val }, cb)
    } else {
        var where = {}
        if (distinct_field == 'ProgramCode') {
            where = { 'Category': val }
        }
        return articleMasterCollection.distinct(distinct_field, where, cb)
    }
}


module.exports = {
    insertArticles,
    getFiltersFromDB
}