import { APP_ASSETS } from "../../utils/assets";

const Member = ({text}) => {
    return (
        <div>
        <div className="w-[35px] h-[35px] rounded-[99px]">
            <img src={APP_ASSETS.profil} alt="Mon profil" className="w-full h-full rounded-[99px] object-cover"/>
        </div>
        <p className="text-[14px] text-gray-500">{text}</p>
        </div>
    );
}

export default Member;