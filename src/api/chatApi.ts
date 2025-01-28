import axios from "axios";
import { getENV } from "../helpers";

const { VITE_API_URL } = getENV();

const chatApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default chatApi;
