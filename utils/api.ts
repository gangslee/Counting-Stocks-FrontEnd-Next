import axios from "axios";

export const localApiGet = (url: string) => webApi.get(`api/${url}`).then((res) => res.data);

// export const localApiGet = (url: string) =>
//   axios
//     .get(`https://counting-stocks-front-end-gangslee.vercel.app/api/${url}`)
//     .then((res) => res.data);

export const webApi = axios.create({
  baseURL: process.env.WEB_SERVER,
});

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
