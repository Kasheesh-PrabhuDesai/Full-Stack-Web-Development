import nextConnect from "next-connect";
import Product from "../../src/models/Product";
import db from "../../src/utils/connectDb";
import data from "../../src/utils/data";

const handler = nextConnect();

handler.get(async (req: any, res: any) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded succesfuly" });
});

export default handler;
