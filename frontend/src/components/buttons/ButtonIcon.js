import {motion} from "framer-motion";

const ButtonIcon = ({ children,className,icon,onClick }) => {
  const canOnClick = () =>{
    if(onClick){
      onClick();
    }
  }
  return (
    <motion.button transition={{duration : 0.04}} whileTap={{scale : 0.98,translateY : 2,opacity : 0.7}} onClick={canOnClick} className={`px-4 py-2 flex gap-5 items-center ${className}`}>
      {icon ? icon : <></>}
      {children}
    </motion.button>
  );
};

export default ButtonIcon;
