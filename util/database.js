require('dotenv').config();
const mongoPass = process.env.MONGO_PASS;
const mongoUser = process.env.MONGO_USER;
const mongoAddr = process.env.MONGO_ADDR;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://${mongoUser}:${mongoPass}@${mongoAddr}/shop?retryWrites=true`)
        .then((client) => {
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
