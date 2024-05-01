import { useState } from "react";
import Aside from "../../components/Aside/Aside";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import { APP_ASSETS } from "../../utils/assets";
import Searsh from "../../components/Searsh/Searsh";
import Project from "../../components/Project/Project";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getAllProject } from "../../apis/projectApi";

const Home = () => {
    const [activeAside,setActiveAside] = useState(false);
    const projects = [1,2,3,4,5,6,7,8,9,0];
    // const {user} = useSelector(state => state);

    getAllProject().then(res => {
        console.log(res);
    })

    return (
        <>
            <nav className="h-[70px] flex justify-between items-center px-4 w-full max-w-[1200px] m-auto">
            <img alt="logo letter" src={APP_ASSETS.logo} className="h-[60%]"/>
            <div className="flex gap-20 justify-between items-center">
                <Link to="/add">
                <ButtonIcon className="bg-blue-600 rounded text-white shadow-md" icon={<AiOutlineAppstoreAdd size={20}/>}>
                    Add project
                </ButtonIcon>
                </Link>
                <button className="burger" onClick={() => {setActiveAside(true)}}>
                    <div className="top"></div>
                    <div className="midle"></div>
                    <div className="bottom"></div>
                </button>
            </div>
        </nav>
        <Aside active={activeAside} onClose={() =>{setActiveAside(false)}}/>
        <main className="w-full max-w-[1200px] mx-auto px-4">
            <Searsh/>
            {/* <ButtonIcon className="bg-[blue] rounded text-[#fff]" onClick={onRegister}>registerUser</ButtonIcon> */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {projects.map((p,i,_) =>(<Project id={i + p}/>))}
            </div>
        </main>
        </>
    );
}

export default Home;