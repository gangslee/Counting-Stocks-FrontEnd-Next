// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../../utils/api";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(async (req, res) => {
  const {
    data: { stock },
  } = await serverApi.get("stocks/my");
  console.log(stock);
  res.status(200).send(JSON.stringify(stock));
});

export default handler;
