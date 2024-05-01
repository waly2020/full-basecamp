import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "http://localhost:8080",
    headers : {
        Accept : "*"
    }
    
});
// axios.interceptors.response.use((config) =>{
//     console.log(config);
//     console.log("Requette intercepte");
// })