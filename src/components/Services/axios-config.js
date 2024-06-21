import axios from "axios";

// const baseURL="http://localhost:3007";  // baseURL is case sensitive-dont change it
const baseURL="https://g2c-4.onrender.com"; 

const publicAxios=axios.create({baseURL});

const privateReq = axios.create({ baseURL,});

privateReq.interceptors.request.use((config) => 
{
  const token = localStorage.getItem("token");
  alert(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export {publicAxios,baseURL,privateReq};