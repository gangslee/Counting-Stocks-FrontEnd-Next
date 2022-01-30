import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import yahooFinance from "yahoo-finance2";
import NextCors from "nextjs-cors";
import { dateFormat, getDay } from "../../../../utils/day";
import { ThumbnailChartDatas } from "../../../../types/index/MyStockInfo";

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
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const today = new Date();
  let max = 0;
  let min = 9999999;

  let maxDate = "";
  let minDate = "";

  const { symbol } = req.query;
  const queryOptions = { period1: getDay(-90), period2: today };
  try {
    const result = await yahooFinance.historical(`${symbol}`, queryOptions);
    const history = result.map((res) => {
      const date = dateFormat(res.date);
      if (res.close > max) {
        max = res.close;
        maxDate = date;
      } else if (res.close < min) {
        min = res.close;
        minDate = date;
      }
      return { x: date, y: res.close };
    });

    const ThumbnailChartDatas: ThumbnailChartDatas = {
      history,
      max,
      min,
      maxDate,
      minDate,
    };

    return res.status(200).send(ThumbnailChartDatas);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

export default handler;
