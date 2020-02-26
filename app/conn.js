const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const config = require("./config");

// still learning about auth persistence hence no username and password used
const url = `mongodb://${config.mongodb.host}:${config.mongodb.port}/admin?authSource=admin`;
let _db;

const connectDB = async(callback) => {
  try {
    MongoClient.connect(url, (err, client) => {
      _db = client.db("test")
      return callback(err)
    })
  } catch (e) {
    throw e
  }
}

const getDb = () => _db

const disconnectDB = () => _db.close()

module.exports = {connectDB, getDb, disconnectDB}