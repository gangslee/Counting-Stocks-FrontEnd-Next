import axios from "axios";

export const fetcher = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
