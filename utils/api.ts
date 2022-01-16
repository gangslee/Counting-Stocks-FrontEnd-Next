import axios from "axios";

// export const localApiGet = (url: string) =>
//   axios.get(`http://localhost:8080/api/${url}`).then((res) => res.data);
export const localApiGet = (url: string) =>
  axios
    .get(`http://counting-stocks-front-end-gangslee.vercel.app/api/${url}`)
    .then((res) => res.data);

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
