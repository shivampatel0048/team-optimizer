import { getClientCookie } from "@/utils/cookie";
import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
API.interceptors.request.use(
  (config) => {
    const token = getClientCookie('token');

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (!(error instanceof Error)) {
      error = new Error(String(error));
    }
    return Promise.reject(error);
  }
);

export default API;
