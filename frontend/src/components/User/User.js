import { APP_ASSETS } from "../../utils/assets";
const User = () => {
    return (
        <div className="relative bg-slate-500">
            <div className="w-[40px] h-[40px] bg-black rounded-[99px] border-2 border-black">
                <img src={APP_ASSETS.profil} className="w-full h-full rounded-[99px]"/>
            </div>
            <ul className="absolute bg-slate-300 mt-2 left-0 translate-x-[-50%]">
                <li>abcef@gmail.com</li>
                <li>Edit my profil</li>
                <li>Loug out</li>
            </ul>
        </div>
    );
}

export default User;