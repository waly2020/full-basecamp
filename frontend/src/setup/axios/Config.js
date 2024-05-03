import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://basecamp-pw67.onrender.com/",
    // baseURL : "http://localhost:10000",
    headers : {
        Accept : "*"
    }
    
});

// axios.interceptors.response.use((config) =>{
//     console.log(config);
//     console.log("Requette intercepte");
// })