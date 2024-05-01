import { IoMdOptions } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import Lorem from "../Lorem";
import { Link } from "react-router-dom";
import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
/*
- name project,
- user e-mail,
- project description,
- button set project data,
  - button add member,
  - set name
  - set description
- button message,
  - create discussion
  - write a message
  - delet discussion
  - delet message
- button delete
  - modal 'want you realy delete this project ?'
*/

const Project = ({ id = 0 }) => {
  return (
    <div className=" w-full max-w-[300px] rounded overflow-hidden shadow-md">
      <Header id={id} />
      <Content />
      <Footer id={id} />
    </div>
  );
};
//-------
const Header = ({ id }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-full">
        <img className="w-full h-full object-cover" alt="la couverture" src={APP_ASSETS.cover_2} />
      </div>
      <div className="relative px-2 py-3 bg-[rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center text-white">
          <p>Projet etablissement</p>
          <Link to={`/details/${id}`} className="flex justify-end items-center bg-blue-500 p-2 rounded">
            <IoMdOptions size={20} />
          </Link>
        </div>
        <p className="text-white">walyguema@gmail.com</p>
      </div>
    </div>
  );
};
//-------
const Content = () => {
  return (
    <div className="p-2">
      <Lorem word={20} className="text-gray-500" />
    </div>
  );
};
//-------
const Footer = ({ id = 2 }) => {
  return (
    <div className=" py-3 px-2 flex justify-between">
      <div className="flex gap-1">
        <ButtonIcon className="bg-gray-200 rounded text-gray-500" icon={<HiOutlineUserGroup size={20}/>}>
          {id * 2}
        </ButtonIcon>
        <ButtonIcon className="bg-gray-200 rounded text-gray-500" icon={<HiOutlineChatBubbleLeftRight size={20}/>}>
          {id ** 2}
        </ButtonIcon>
      </div>
      <ButtonIcon className="bg-red-600 rounded text-white" icon={<MdOutlineDeleteForever size={20}/>}/>
    </div>
  );
};
//-------
export default Project;
