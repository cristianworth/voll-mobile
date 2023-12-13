import axios from "axios";

const ip = "192.168.0.100"; // use your ip adress 
const port = "3000";
const api = axios.create({baseURL: `http://${ip}:${port}`})

export default api