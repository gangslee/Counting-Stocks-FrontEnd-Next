import axios from "axios";

export const localApiGet = (url: string) =>
  axios.get(`http://localhost:8080/api/${url}`).then((res) => res.data);
// const localApiGet = () => axios.get("https://counting-stocks-front-end-gangslee.vercel.app/api/").then((res) => res.data);

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
