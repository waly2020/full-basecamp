import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  motion,
  useMotionValue
} from "framer-motion";
const TRANSITION = {
  type : "spring",
  mass : 3,
  stiffness : 400,
  damping : 50
}
const Gallery = ({ assets = [], active = false,start = 0,onClose}) => {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  useEffect(() =>{
    setIndex(start);
  },[start])
  const onClickClose = () => {
    if(onClose){
      onClose();
    }
  };
  const dragEnd = () => {
    const x = dragX.get();
    if (Math.abs(x) >= 100) {
      if (x < 0 && index < assets.length - 1) {
        setIndex((idx) => idx + 1);
      } else if (x > 0 && index > 0) {
        setIndex((idx) => idx - 1);
      }
    }
  };
  return (
    <motion.div style={{scale : 0,opacity : 0}} animate={{scale : active ? 1 : 0,opacity : active ? 1 : 0}} className="fixed w-full h-full bg-[rgba(0,0,0,0.8)] z-50 left-0 top-0 flex flex-col justify-center items-center overflow-hidden">
      <div className="flex justify-between w-full max-w-[700px] px-4 py-7">
        <p className="text-white text-2xl">{index + 1}/{assets.length}</p>
        <button onClick={onClickClose}><IoIosCloseCircleOutline size={30} color="#fff"/></button>
      </div>
      <div className="w-full max-w-[700px] flex h-full max-h-[600px]">
        <motion.div
          transition={TRANSITION}
          style={{ x: dragX }}
          onDragEnd={dragEnd}
          animate={{ translateX: `-${index * 100}%` }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="w-full flex h-full"
        >
          {assets.map((att, i, _) => (
            <motion.div
              key={i}
              animate={{scale : index == i ? 0.8 : 0.3}}
              transition={TRANSITION}
              style={{
                backgroundImage: `url(${att.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full shrink-0"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
