import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion';

const Task = ({text = ""}) => {
    const [checked,setChecked] = useState(false);
    const onChecked = () =>{
        setChecked(!checked);
    }
    return (
        <div className="flex gap-3 my-3">
            <motion.button onClick={onChecked} animate={{background : checked ? "royalblue" : "rgb(229,231,235)",color : checked ? "#fff" : "#555"}} className="w-[20px] h-[20px] flex justify-center items-center rounded">
                {checked ? <FaCheckDouble size={10}/> : <FaCheck size={10}/>}
            </motion.button>
            <button className="bg-red-600 w-[20px] h-[20px] flex justify-center items-center rounded">
                <IoClose size={12} color="#fff"/>
            </button>
            <p className="relative">
            <motion.span animate={{opacity : checked ? 0.5 : 1}}>
            {text}
            </motion.span>
            <motion.div style={{originX : "left"}} transition={{type : "spring"}} animate={{scaleX : checked ? 1 : 0,opacity : checked ? 1 : 0}} className="absolute w-full h-[2px] bg-black left-0 top-[50%]"></motion.div>
            </p>
        </div>
    );
}

export default Task;