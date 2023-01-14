const { MongoClient } = require("mongodb");

const URL = process.env.DB_CONNECTION_URL;
const DB_NAME = process.env.DB_NAME;

let _db;

module.exports = {
    connectToServer: function (callback) {
        MongoClient.connect(URL, { useNewUrlParser: true }, function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db(DB_NAME);
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};