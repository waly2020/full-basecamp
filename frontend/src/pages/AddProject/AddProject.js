import { useSelector } from "react-redux";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import InputIcons from "../../components/inputs/InputIcons";
import { useRef } from "react";
import { createProject } from "../../apis/projectApi";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Project is created :)',{duration : 5000});

const AddProject = () => {
    const {user} = useSelector(state => state);
    const nameRef = useRef();
    const descriptionRef = useRef();
    const onCreateProject = (e) =>{
        e.preventDefault();
        createProject({name : nameRef.current.value,description : descriptionRef.current.value,userId : user.id}).then(res =>{
            if(res.status === 201){
                nameRef.current.value = "";
                descriptionRef.current.value = "";
                notify();
            }
        })
    }
    return (
        <>
        <Toaster/>
        <div className="w-screen h-screen flex justify-center items-center flex-col">
           <h1 className="font-bold text-4xl mb-5 uppercase">Add new project</h1>
            <form onSubmit={onCreateProject} className="w-full max-w-[500px] px-3 py-5 flex flex-col gap-5 shadow-lg rounded">
                <InputIcons ref={nameRef} required={true} placeholder="Project name..."/>
                <textarea required={true} ref={descriptionRef} className="resize-none bg-gray-100 rounded p-3 min-h-[200px] outline-gray-300" placeholder="Project description..."/>
                <ButtonIcon className="bg-green-500 text-white justify-center rounded py-3">
                    Create project
                </ButtonIcon>
            </form>
        </div>
        </>
    );
}

export default AddProject;