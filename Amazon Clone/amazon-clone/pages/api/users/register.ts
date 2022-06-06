import nc from "next-connect";
import bcrypt from "bcryptjs";
import db from "../../../src/utils/connectDb";
import User from "../../../src/models/User";
import { signToken } from "../../../src/utils/auth";

const handler = nc();

handler.post(async (req: any, res: any) => {
  await db.connect();

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });

  const user = await newUser.save();

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    await db.disconnect();
  } else {
    res.status(401).send({ message: "Invalid user or password" });
  }
});

export default handler;
