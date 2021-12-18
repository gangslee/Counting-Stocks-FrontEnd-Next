import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://counting-stocks-front-end-gangslee.vercel.app/api/",
});

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
