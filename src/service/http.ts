import axios, { InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || "https://pokemon-xgt1.onrender.com/";

export default class Http {
  static async get(url: string) {
    try {
      const res = axios.get(url);
      return res;
    } catch (e) {
      console.error("error axios get ", e);

      throw e;
    }
  }
  static async post(url: string, data: Object) {
    try {
      return await axios.post(url, data);
    } catch (e) {
      console.error("error axios post ", e);
      throw e;
    }
  }
}
