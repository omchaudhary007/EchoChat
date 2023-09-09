import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://echochat-dtlr.onrender.com/api",
  withCredentials: true,
});
