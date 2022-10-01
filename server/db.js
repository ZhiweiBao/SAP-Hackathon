if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const uri = process.env.URI;
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(uri);

module.exports =
{
    dbConnect: async function dbConnect() {
        try {
            await client.connect();
            console.log("SAP hack DB connected!");
        } catch (err) {
            console.log(err);
        }
    },
}