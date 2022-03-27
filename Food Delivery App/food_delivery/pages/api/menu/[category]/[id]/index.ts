import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(401).json({ msg: "INCORRECT METHOD" });
    } else {
        console.log(req.query);
        res.status(201).json({ msg: "SUCCESS" });
    }
}
