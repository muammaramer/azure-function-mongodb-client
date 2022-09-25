const { MongoClient } = require("mongodb");
const DATABASE_URL = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : 'YOUR_MONGO_DB_URL_HERE';
const DATABASE_NAME = process.env.DATABASE_NAME || 'my-mongo-db';
const DATABASE_COLLECTION_NAME =
          process.env.DATABASE_COLLECTION_NAME || 'my-mongo-collection';

const config = {
          url: DATABASE_URL,
          dbName: DATABASE_NAME 
};

async function createConnection() {
          const connection = await MongoClient.connect(config.url, {
                      useNewUrlParser: true
                    });
          const db = connection.db(config.dbName);
          return {
                      connection,
                      db
                    };
}

module.exports = createConnection;
