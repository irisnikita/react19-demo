// Libraries
import axios from "axios";

// Constants
import { APP_CONFIG } from "@/constants";

const baseURL = APP_CONFIG.API_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;
