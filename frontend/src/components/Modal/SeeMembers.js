import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
import { IoClose } from "react-icons/io5";
/**
 * 
 * @param {{members : [{name : string,email : string}]}} param0 
 * @returns 
 */
const SeeMembers = ({members}) => {
    return (
        <div className="overflow-y-scroll max-h-[500px] hidden-scroll">
            {members.map((m,i,_) =>(
            <div className={`flex gap-3 p-2 items-center rounded ${i % 2 === 0 ? "bg-[#fcfcfc]" : ""}`}>
                <div className="w-[40px] h-[40px] rounded-[99px]">
                    <img className="w-full h-full rounded-[99px]" alt="Mon profil" src={APP_ASSETS.profil}/>
                </div>
                <div className="flex justify-between items-center grow-[1]">
                    <div>
                    <p className="p-0 m-0">{m.name}</p>
                    <p className="text-[14px] p-[0px] m-[0px]">{m.email}</p>
                    </div>
                    <ButtonIcon icon={<IoClose/>} className="hover:text-red-700 px-[0px] py-[0px]"/>
                </div>
            </div>
        ))}
        </div>
    );
}

export default SeeMembers;