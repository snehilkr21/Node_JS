const URI =
  "mongodb+srv://snehilkr21:Jo1E33fr7YteWpve@cluster0.ewcfnz0.mongodb.net/";

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://snehilkr21:Jo1E33fr7YteWpve@cluster0.ewcfnz0.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...

  //read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //inset the another data
  const data = {
    firstName: "shashank",
    lastName: "raj",
    city: "hajipur",
    phoneNumbe: "1234567890",
  };
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
