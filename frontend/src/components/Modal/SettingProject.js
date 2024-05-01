import { useRef } from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import InputIcons from "../inputs/InputIcons";
import { updateProject } from "../../apis/projectApi";

const SettingProject = ({id}) => {
    const nameRef = useRef();
    const descriptionRef = useRef();

    const submitForm = (e) =>{
        e.preventDefault();
        updateProject({id : id,name : nameRef.current.value,description : descriptionRef.current.value}).then(res =>{
            if(res.status === 200){
                window.location.href = "/";
            }
        })
    }
    return (
        <form onSubmit={submitForm}>
            <InputIcons ref={nameRef} required={true} type="text" placeholder="Project name..."/>
            <textarea ref={descriptionRef} required={true} placeholder="Project description..." className="resize-none w-full min-h-[100px] p-3 bg-gray-100 mt-4 rounded"/>
            <ButtonIcon className="bg-green-500 w-full rounded text-white mt-3">
                <p className="text-center w-full">
                    set project.
                </p>
            </ButtonIcon>
        </form>
    );
}

export default SettingProject;