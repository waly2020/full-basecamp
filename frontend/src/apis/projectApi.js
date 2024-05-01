import { axiosInstance } from "../setup/axios/Config"

export const createProject = async ({name,description,userId}) =>{
    return axiosInstance.post("/api/v1/projects",{name : name,description :description,userId : userId}).then(res => res).catch(err => err);
}
export const getAllProject = async () =>{
    return axiosInstance.get("/api/v1/projects").then(res => res).catch(err => err);
}