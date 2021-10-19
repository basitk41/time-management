import axios from "axios";
let token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 1000,
  headers: { token },
});
export default instance;
