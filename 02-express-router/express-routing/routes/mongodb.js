// import { MongoClient } from "mongodb";

// export const client = new MongoClient(
//   "mongodb://dbusername:<dbpassword>@cluster0-shard-00-00.xm325.mongodb.net:27017,cluster0-shard-00-01.xm325.mongodb.net:27017,cluster0-shard-00-02.xm325.mongodb.net:27017/?ssl=true&replicaSet=atlas-11pmjs-shard-0&authSource=admin&appName=Cluster0",
// );

// export async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// export async function disconnectFromMongoDB() {
//   await client.close();
// }

import { MongoClient } from "mongodb";

export const client = new MongoClient(
  "mongodb://dbusername:dbpassword@cluster0-shard-00-00.xm325.mongodb.net:27017,cluster0-shard-00-01.xm325.mongodb.net:27017,cluster0-shard-00-02.xm325.mongodb.net:27017/?ssl=true&replicaSet=atlas-11pmjs-shard-0&authSource=admin&appName=Cluster0",
);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}
