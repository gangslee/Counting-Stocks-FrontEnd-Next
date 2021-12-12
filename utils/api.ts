import axios from "axios";

export const fetcher = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const serverApi = axios.create({
  baseURL: "http://localhost:4000",
});
