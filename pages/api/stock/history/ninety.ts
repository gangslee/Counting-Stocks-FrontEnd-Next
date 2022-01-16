import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import yahooFinance from "yahoo-finance2";
import NextCors from "nextjs-cors";
import { getDay } from "../../../../utils/day";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke! - stock/history/ninety API");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found - stock/ninety API");
  },
}).get(async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const today = new Date();

  const { symbol } = req.query;
  const queryOptions = { period1: getDay(-90), period2: today };

  const result = await yahooFinance.historical(`${symbol}`, queryOptions);
  const data = result.map((res) => {
    return { x: res.date, y: res.close };
  });

  res.status(200).send(data);
});

export default handler;
