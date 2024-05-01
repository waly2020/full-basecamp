import { axiosInstance } from "../setup/axios/Config"

export const createProject = async ({name,description,userId}) =>{
    return axiosInstance.post("/api/v1/projects",{name : name,description :description,userId : userId}).then(res => res).catch(err => err);
}
export const getAllProject = async () =>{
    return axiosInstance.get("/api/v1/projects").then(res => res).catch(err => err);
}
export const deleteProject = async ({id}) =>{
    return axiosInstance.delete(`/api/v1/project/${id}`).then(res => res).catch(err => err);
}
export const getProject = async ({id}) =>{
    return axiosInstance.get(`/api/v1/project/${id}`).then(res => res).catch(err => err);
}
export const updateProject = async ({id,name,description}) =>{
    return axiosInstance.put(`/api/v1/project/${id}`,{name : name,description : description}).then(res => res).catch(err => err);
}