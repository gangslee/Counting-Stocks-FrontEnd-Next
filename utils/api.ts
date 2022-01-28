import axios from "axios";

export const localApiGet = async (url: string) => {
  return await webApi.get(`/api/${url}`).then((res) => res.data);
};

export const webApi = axios.create({
  baseURL: process.env.WEB_SERVER,
});

export const serverApi = axios.create({
  baseURL: process.env.REAL_SERVER,
});
