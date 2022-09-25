const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { db, connection } = await createMongoClient()

  const collection = process.env.DATABASE_COLLECTION_NAME || 'my-mongo-collection';
  const tasksCollection = db.collection(collection)
  const res = await tasksCollection.find({})
  const body = await res.toArray()

  connection.close()
  context.res = {
    status: 200,
    body
  }
}
