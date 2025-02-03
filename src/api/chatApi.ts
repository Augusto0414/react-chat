import axios from "axios";
import { getENV } from "../helpers";

const { VITE_API_URL } = getENV();

const chatApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Intecerptor para tomar el token
chatApi.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.set("Authorization", localStorage.getItem("token") || "");
  }

  return config;
});

export default chatApi;
