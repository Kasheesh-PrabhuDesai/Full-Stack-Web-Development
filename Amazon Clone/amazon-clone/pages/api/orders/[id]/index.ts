import nextConnect from "next-connect";
import db from "../../../../src/utils/connectDb";
import Order from "../../../../src/models/Order";
import { isAuth } from "../../../../src/utils/auth";

const handler = nextConnect();

handler.use(isAuth);

handler.get(async (req: any, res: any) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
});

export default handler;
