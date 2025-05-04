import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
const API_VERSION = "v1";

export default axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: { "Content-Type": "application/json" },
});

export const api = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: { "Content-Type": "application/json" },
});