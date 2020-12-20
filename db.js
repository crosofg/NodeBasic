const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'database_sales';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const col = db.collection('test');
    // Insert multiple documents
    col.insertMany([{ a: 1 }, { a: 1 }, { a: 1 }], function (err, r) {
        assert.equal(null, err);
        assert.equal(3, r.insertedCount);

        client.close();
    });
});
