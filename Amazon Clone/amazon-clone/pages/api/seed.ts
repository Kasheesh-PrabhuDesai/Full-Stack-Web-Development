import nextConnect from "next-connect";
import Product from "../../src/models/Product";
import User from "../../src/models/User";
import db from "../../src/utils/connectDb";
import data from "../../src/utils/data";

const handler = nextConnect();

handler.get(async (req: any, res: any) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded succesfuly" });
});

export default handler;
