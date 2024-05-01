import { DISCUSSIONS } from "../../utils/datas";
import ButtonIcon from "../buttons/ButtonIcon";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoPencilSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const messageVariant = {
  open: {
    position: "relative",
  },
  close: {
    position: "absolute",
  },
};
/**
 *
 * @param {{discussions : DISCUSSIONS}} param0
 * @returns
 */
const Discussions = ({ discussions }) => {
    const [seeDiscussion,setSeeDiscussion] = useState(false);
    const activeDiscussion = () =>{
        setSeeDiscussion(!seeDiscussion);
    }
  return (
    <div className="w-full bg-gray-50 rounded border">
      <div className="px-1 flex justify-between items-center">
        <ButtonIcon
        onClick={activeDiscussion}
          icon={<motion.div animate={{rotate : seeDiscussion ? 180 : 0}}><MdExpandMore color="#000" size={30} /></motion.div>}
          className="font-bold text-[18px] px-0 py-0 bg-transparent gap-1"
        >
          <p className="text-black">{discussions[0].name}</p>
        </ButtonIcon>
        <div className="flex gap-0">
          <ButtonIcon className="bg-transparent hover:bg-[rgba(0,0,0,0.1)] transition-all duration-500" icon={<IoMdSettings color="#333"/>} />
          <ButtonIcon className="bg-transparent hover:bg-[rgba(0,0,0,0.1)] transition-all duration-500" icon={<MdDelete color="red"/>} />
        </div>
      </div>
      <AnimatePresence>
        {seeDiscussion ? <motion.div transition={{type : "tween"}} initial={{opacity : 0,height : 0}} animate={{opacity : 1, height : "auto"}} exit={{opacity : 0,height : 0}}>
          <motion.div className="py-5 px-3 relative">
            {DISCUSSIONS[0].messages.map((m, i, _) => (
              <MotionMessage
                variants={messageVariant}
                animate={"open"}
                key={i}
                messages={m}
              />
            ))}
          </motion.div>
          <div className="px-3 py-3 grid grid-cols-[1fr,50px] gap-3 items-end">
            <textarea
              className="resize-none p-3 rounded min-h-[100px] outline-none border-gray-300 border-[2px]"
              placeholder="Add your message here..."
            ></textarea>
            <ButtonIcon className="bg-green-600 rounded" icon={<FiSend />} />
          </div>
        </motion.div> : null}
      </AnimatePresence>
    </div>
  );
};
/**
 *
 * @param {{messages : {email: string,message: string}}} param0
 * @returns
 */
const Message = forwardRef(({ messages }, ref) => {
  const user = messages.email == "walyguema@gmail.com" ? true : false;
  return (
    <div
      ref={ref}
      className={`my-2 overflow-hidden bg-gray-200 w-full`}
    >
      <div
        className={`${user ? 'bg-blue-500' : 'bg-gray-400'} p-2 flex justify-between items-center ${
          user ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {user ? <ButtonIcon className="bg-[rgba(0,0,0,0)] py-[0px] px-[0px]" icon={<IoPencilSharp size={20} color="#fff"/>} /> : <p></p>}
        <div>
          <p className="text-white">{messages.email}</p>
          {/* <p className="text-[13px]">Mardi 18 jan 2024</p> */}
        </div>
      </div>
      <div>
        <p className={`px-2 py-4 ${user ? "text-end" : ""}`}>{messages.message}</p>
      </div>
    </div>
  );
});
const MotionMessage = motion(Message);
export default Discussions;
