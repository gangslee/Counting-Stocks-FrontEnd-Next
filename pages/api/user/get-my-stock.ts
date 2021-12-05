// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const api = axios.create({});

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(async (req, res) => {
  const { data } = await api.get("http://localhost:4000/stocks/my");

  res.status(200).send(JSON.stringify(data));
});

export default handler;
