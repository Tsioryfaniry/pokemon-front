import axios from "axios";

export default function axiosInterceptor(bearer?: string) {
  axios.interceptors.request.use(
    function (config) {
      if (bearer) {
        config.headers.Authorization = `Bearer ${bearer}`;
      }
      return config;
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return axios;
}
