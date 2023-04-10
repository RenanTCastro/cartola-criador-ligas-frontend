import axios from "axios";

let dev = true;

const api = axios.create({
  baseURL: dev ? "http://localhost:3001/" : "",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default api;
