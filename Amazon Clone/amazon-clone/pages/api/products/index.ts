import nextConnect from "next-connect";
import Product from "../../../src/models/Product";
import db from "../../../src/utils/connectDb";

const handler = nextConnect();

handler.get(async (req: any, res: any) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

export default handler;
