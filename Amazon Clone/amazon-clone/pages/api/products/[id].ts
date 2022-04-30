import nextConnect from "next-connect";
import Product from "../../../src/models/Product";
import db from "../../../src/utils/connectDb";

const handler = nextConnect();

handler.get(async (req: any, res: any) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

export default handler;
