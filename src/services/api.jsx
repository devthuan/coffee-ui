import axios from "axios";
import { getItemWithExpiration } from "./LocalStorage";
const api = axios.create({
  baseURL: "http://localhost:8080/v1/",
  timeout: 5000, // Đặt timeout tùy ý
});

api.interceptors.request.use(
  async (config) => {
    const token = await getItemWithExpiration("token"); // Truy cập token từ Redux store
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
