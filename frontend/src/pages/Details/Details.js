import { Link, useParams } from "react-router-dom";
import { APP_ASSETS } from "../../utils/assets";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import SectionIcon from "../../components/sections/SectionIcon";
import { useEffect, useState } from "react"; 
import ButtonIcon from "../../components/buttons/ButtonIcon"; 
import Modal from "../../components/Modal/Modal";
import SettingProject from "../../components/Modal/SettingProject"; 
import { TbFileDescription } from "react-icons/tb"; 
import { IoMdOptions } from "react-icons/io";
import { getProject } from "../../apis/projectApi";

const Details = () => {
  const [project,setProject] = useState(null);
  const {id} = useParams();
  console.log(id);
  const [aside,setAside] = useState(false);
  const [settingProject,setSettingProject] = useState(false);
  const onSetting = () =>{
    setSettingProject(!settingProject);
  }
  const activeAside = () =>{
    setAside(!aside);
  }
  useEffect(() =>{
    getProject({id : id}).then(res =>{
      console.log(res);
     if(res.status === 200){
      setProject(res.data);
     }
    })
  },[]);

  return (
    <>
    <Modal onClose={onSetting} active={settingProject} title="Setting project">
      <SettingProject id={id}/>
    </Modal>
      <header className="h-[70px] relative">
        <nav className="absolute top-0 left-0 flex justify-between w-full px-4 py-2 text-white z-10">
          <Link to="/home" className="text-2xl"><IoMdArrowRoundBack/></Link>
          <button className="md:hidden" onClick={activeAside}>Setting</button>
        </nav>
        <div className="h-full relative bg-[rgba(0,0,0,0.5)]">
          <img src={APP_ASSETS.cover_2} alt="deuxieme couverture" className="h-full w-full object-cover absolute z-[-1]"
          />
        </div>
      </header>
      <main className="grid md:grid-cols-[1fr,300px] md:gap-3 w-full max-w-[1000px] m-auto py-6 px-2 md:px-4">
        <div className="flex flex-col gap-4">
            <SectionIcon icon={<MdWorkOutline/>} title="Project name">
              <h2 className="font-bold text-2xl">{project?.name}</h2>
            </SectionIcon>
            <SectionIcon icon={<TbFileDescription/>} title="Description">
                <p>
                  {project?.description}
                </p>
            </SectionIcon>
        </div>
        <aside className={`px-2 py-5 fixed right-0 top-0 z-30 w-[300px] md:w-auto bg-white shadow-2xl md:shadow-none h-screen md:h-auto overflow-y-scroll md:block transition-all duration-300 md:relative ${aside ? 'translate-x-[0%]' : 'translate-x-[100%]'} md:translate-x-0`}>
          <div className="flex justify-between">
          <h2 className="font-bold">Add to project</h2>
          <ButtonIcon onClick={activeAside} className="md:hidden" icon={<MdWorkOutline/>}/>
          </div>
          <ButtonAside onClick={onSetting} icon={<IoMdOptions size={20}/>}><p>Settings project</p></ButtonAside>
        </aside>
      </main>
    </>
  );
};
const ButtonAside = ({children,icon,onClick}) =>{
  const onClickButton = () =>{
    if(onClick){
      onClick();
    }
  }
  return (
    <ButtonIcon onClick={onClickButton} className="w-full bg-[#eee] my-3 rounded hover:bg-blue-700 hover:text-white transition-all duration-200" icon={icon}>
      {children}
    </ButtonIcon>
  )
}
export default Details;