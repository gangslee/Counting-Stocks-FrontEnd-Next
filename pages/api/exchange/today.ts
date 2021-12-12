import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { getExchangeData } from "yahoo-exchange";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke! - stock/my_stock_current API");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found - stock/my_stock_current API");
  },
}).get(async (req, res) => {
  const data = await getExchangeData("KRW");

  res.status(200).send(data[0][0]);
});

export default handler;
