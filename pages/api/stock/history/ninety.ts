import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import yahooFinance from "yahoo-finance2";
import { HistoricalOptions } from "yahoo-finance2/dist/esm/src/modules/historical";
import { getDay } from "../../../../utils/day";
import { ModuleOptions } from "yahoo-finance2/dist/esm/src/lib/moduleCommon";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke! - stock/history/ninety API");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found - stock/ninety API");
  },
}).get(async (req, res) => {
  const today = new Date();

  const { symbol } = req.query;
  const queryOptions: HistoricalOptions = { period1: getDay(-90), period2: today };

  const result = await yahooFinance.historical(`${symbol}`, queryOptions);
  const data = result.map((res) => {
    return { x: res.date, y: res.close };
  });

  res.status(200).send(data);
});

export default handler;
