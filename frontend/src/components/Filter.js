import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import ButtonIcon from "./buttons/ButtonIcon";
import { IoFilterSharp } from "react-icons/io5";
const Filter = () => {
    const [displayFilter,setDisplayFilter] = useState(false);
    const onDisplayFilter = () =>{
        setDisplayFilter(!displayFilter);
    }
  return (
    <div className="relative z-10">
      <button onClick={onDisplayFilter} className="w-full h-full bg-green-500 rounded text-white flex justify-center items-center">
        <IoFilterSharp size={23}/>
      </button>
      <div className={`${displayFilter ? 'block' : 'hidden'} bg-white p-2 shadow-md rounded absolute right-0 z-[-1] w-[230px] translate-y-[5px] gap-1`}>
        <ButtonIcon className="hover:bg-gray-50 w-full" icon={<IoMdArrowRoundBack/>}>All projects</ButtonIcon>
        <ButtonIcon className="hover:bg-gray-50 w-full" icon={<IoMdArrowRoundBack/>}>Create by me</ButtonIcon>
        <ButtonIcon className="hover:bg-gray-50 w-full" icon={<IoMdArrowRoundBack/>}>Shared with me</ButtonIcon>
      </div>
    </div>
  );
};
export default Filter;
