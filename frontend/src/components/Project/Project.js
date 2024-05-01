import { IoMdOptions } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
import { useSelector } from "react-redux";
import { deleteProject } from "../../apis/projectApi";

const Project = ({ project}) => {
  const {user} = useSelector(state => state);

  return (
    <div className=" w-full max-w-[300px] rounded overflow-hidden shadow-md">
      <Header userMail={user.email} projectName={project.name} id={project.id}/>
      <Content description={project.description}/>
      <Footer id={project.id} />
    </div>
  );
};
//-------
const Header = ({userMail,projectName,id }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-full">
        <img className="w-full h-full object-cover" alt="la couverture" src={APP_ASSETS.cover_2} />
      </div>
      <div className="relative px-2 py-3 bg-[rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center text-white">
          <p>{projectName}</p>
          <Link to={`/details/${id}`} className="flex justify-end items-center bg-blue-500 p-2 rounded">
            <IoMdOptions size={20} />
          </Link>
        </div>
        <p className="text-white">{userMail}</p>
      </div>
    </div>
  );
};
//-------
const Content = ({description}) => {
  return (
    <div className="p-2">
      <p className="text-gray-500 break-words">
        {description}
      </p>
    </div>
  );
};
//-------
const Footer = ({ id = 2 }) => {
  const onDelete = () =>{
    console.log("Delete");
    deleteProject({id : id}).then(res =>{
      // if(res.status === 200){
        window.location.reload();
      // }
    })
  }
  return (
    <div className=" py-3 px-2 flex justify-between">
      <div className="flex gap-1">
        <ButtonIcon className="bg-gray-200 rounded text-gray-500" icon={<HiOutlineUserGroup size={20}/>}>
          {id}
        </ButtonIcon>
        <ButtonIcon className="bg-gray-200 rounded text-gray-500" icon={<HiOutlineChatBubbleLeftRight size={20}/>}>
          {id}
        </ButtonIcon>
      </div>
      <ButtonIcon onClick={onDelete} className="bg-red-600 rounded text-white" icon={<MdOutlineDeleteForever size={20}/>}/>
    </div>
  );
};
//-------
export default Project;
