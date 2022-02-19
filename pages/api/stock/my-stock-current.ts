import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import yahooFinance from "yahoo-finance2";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke! - stock/my_stock_current API");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found - stock/my_stock_current API");
  },
}).get(async (req, res) => {
  const { code } = req.query;
  const fields: ("regularMarketPrice" | "regularMarketChange")[] | undefined = [
    "regularMarketPrice",
    "regularMarketChange",
  ];

  const { regularMarketChange, regularMarketPrice } = await yahooFinance.quoteCombine(`${code}`, {
    fields,
  });
  res.status(200).send(JSON.stringify({ regularMarketChange, regularMarketPrice }));
});

export default handler;
