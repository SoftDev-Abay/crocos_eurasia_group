import axios from "axios";

const http = axios.create({
  baseURL: "https://api.eurasia.crocos.kz/api/v1",
});

export default http;
