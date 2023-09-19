import axios from "axios";


// const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
const API = axios.create({ baseURL: "http://localhost:8080/api/v1/" });
API.interceptors.request.use((req) => {
  // console.log(process.env.REACT_APP_BASEURL ,"kkkk")
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
