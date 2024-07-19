import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://turboyadro-back.vercel.app'
    baseURL: "http://localhost:5555/",
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
})

export default instance;