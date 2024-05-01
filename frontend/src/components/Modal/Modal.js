import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";
const modalVariants = {
    close : {
        scale : 0,
        opacity : 0
    },
    open : {
        scale : 1,
        opacity : 1
    }
}
const Modal = ({title = "Add new title...",children,onClose,active = false}) => {
    const callOnClose = () =>{
        if(onClose){
            onClose();
        }
    }
    return (
        <motion.div variants={modalVariants} style={modalVariants.close} animate={active ? "open" : "close"} className="fixed z-50 w-screen h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center p-3">
            <div className="w-full max-w-[400px] p-3 bg-white shadow-lg rounded">
                <div className="flex justify-between items-center mb-6">
                    <p className="font-bold">{title}</p>
                    <button onClick={callOnClose} className="w-[30px] h-[30px] flex justify-center items-center rounded-[99px] shadow-close">
                        <IoClose/>
                    </button>
                </div>
                <div>
                    {children ?? <p>Add new content...</p>}
                </div>
            </div>
        </motion.div>
    );
}

export default Modal;