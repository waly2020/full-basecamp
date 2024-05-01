import { axiosInstance } from "../setup/axios/Config";

/**
 * Cree un utilisateur dans la base de donnee
 * @param {{name : string,email : string,password : string, confirmPassword : string}} param0 
 * @returns 
 */
export const registerUser = async ({name,email,password,confirmPassword}) =>{
    return axiosInstance.post("/api/v1/users/register",{
    name : name,
        password : password,
        confirmPassword : confirmPassword,
        email : email
    }).then(res => res).catch(err => err)
}
/**
 * Connecte un utilisateur
 * @param {{name : string,email : string,password : string, confirmPassword : string}} param0 
 * @returns 
 */
export const signUser = async ({email,password}) =>{
    return axiosInstance.post("/api/v1/users/login",{
        email : email,
        password : password,
    }).then(res => res).catch(err => err)
}
export const logoutUser = async () =>{
    return axiosInstance.post("/api/v1/users/logOut").then( res => res).catch(err => err);
}
export const welcomeToBackend = async () =>{
    return axiosInstance.get("/").then(res => res);
}