const mongojs = require('mongojs')
const connectionString = 'mongodb://localhost:27017/database_sales';



const db = mongojs(connectionString)

module.exports = db



