import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import db from "../../src/utils/connectDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await db.connect();
  // await db.disconnect();

  res.status(200).json({ msg: "SUCCESFULLY TESTED" });
}
