import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://youtube-yx93.onrender.com",
});

export default axiosInstance;
