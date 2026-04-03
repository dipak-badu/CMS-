import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: "server timeout...",
  responseType: "json",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
