import mongoose from "mongoose";

async function connect() {
  if (mongoose.connections.length > 0) {
    if (mongoose.connections[0].readyState === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGODB_URI as string);
  console.log("NEW CONNECTION");
}

async function disconnect() {
  if (mongoose.connections[0].readyState === 1) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
    } else {
      console.log("not disconnected");
    }
  }
}

//function to convert mongo db non primitive data type to primitive string data type
function convertDocToObj(doc: any) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();

  return doc;
}

const db = { connect, disconnect, convertDocToObj };

export default db;
