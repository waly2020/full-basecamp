import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import {useDispatch, useSelector} from 'react-redux';
import { logout } from "../../setup/redux/slices/UserSlicer";
import { logDatas } from "../../utils/functions";
import { logoutUser } from "../../apis/userApi";

const Aside = ({active = false,onClose}) => {
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();
    const closeAside = () =>{
        if(onClose){
            onClose();
        }
    }
    const onLogout = () =>{
        dispatch(logout());
        logoutUser().then(res =>{
            logDatas(res,"----- session clear -----");
        })
    }
    return (
        <aside className={`fixed w-[300px] bg-white shadow-xl z-20 h-full top-0 right-0 transition ${active ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
        <div className="flex flex-col items-center gap-4">
            <div className="w-full relative p-3 flex flex-col gap-3 justify-center items-center">
                <ButtonIcon onClick={closeAside} icon={<IoMdArrowRoundBack/>} className="absolute right-3 top-3 flex justify-center items-center rounded rotate-[180deg] bg-gray-100 text-gray-600"/>
                <img src={APP_ASSETS.profil} alt="my profile" className="w-[100px] h-[100px] rounded-[30px] object-cover"/>
                <p className="text-center bottom-0 w-full py-1">{user.name}</p>
                <p className="text-center bottom-0 w-full py-1">{user.email}</p>
            </div>
            <div className="flex flex-col gap-2 w-full px-2">
                <ButtonIcon icon={<RiProfileLine size={23}/>} className="bg-green-500 rounded text-white">Edite my profil</ButtonIcon>
                <ButtonIcon onClick={onLogout} icon={<CiLogout size={23}/>} className="bg-red-600 text-white rounded">Log out</ButtonIcon>
            </div>
        </div>
        </aside>
    );
}

export default Aside;