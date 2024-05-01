import { forwardRef } from "react";
// placeholder = "",name = "",type = "text",id = "",
import {
    AiOutlineUser
  } from "react-icons/ai";
  
const InputIcons = forwardRef(({className = "",icon,...attributs},ref) => {
    return (
        <div className={`w-full grid grid-cols-[45px,1fr] h-[45px] bg-gray-300 overflow-hidden rounded ${className ?? ""}`}>
            <div className="flex justify-center items-center">
                <p className="text-gray-800">
                    {icon ?? <AiOutlineUser size={20}/>}
                </p>
            </div>
            <input ref={ref} {...attributs}  className="bg-gray-100 px-2 outline-gray-300"/>
        </div>
    );
})

export default InputIcons;