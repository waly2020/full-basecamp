import { useState } from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import InputIcons from "../inputs/InputIcons";
import { FaCheck } from "react-icons/fa";
import {motion} from "framer-motion";

const AddMember = () => {
    const [isAdmin,setIsAdmin] = useState(false);
    const onAdmin = () =>{
        setIsAdmin(!isAdmin);
    }
    return (
        <div>
            <InputIcons type="text" id="email" placeholder="Member e-mail"/>
            <motion.button transition={{duration : 0.05}} whileTap={{scale : 0.96}} onClick={onAdmin} className="flex gap-2 mt-2 items-center">
                <div className={`w-[20px] h-[20px] transition-all duration-100 ${isAdmin ? "bg-blue-700" : "bg-gray-400"} text-white relative flex justify-center items-center rounded`}>
                    <FaCheck size={12}/>
                </div>
                <p>Is admin</p>
            </motion.button>
            <ButtonIcon className="bg-green-600 w-full mt-4 rounded text-white py-2">
                <p className="text-center w-full">Add member</p>
            </ButtonIcon>
        </div>
    );
}

export default AddMember;