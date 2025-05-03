import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_BACKEND_API_VERSION;

export default axios.create({
    baseURL: `${BASE_URL}/${API_VERSION}`,
    headers: { "Content-Type": "application/json" },
})

export const axiosAuth = axios.create({
    baseURL: `${BASE_URL}/${API_VERSION}`,
    headers: { "Content-Type": "application/json" },
})