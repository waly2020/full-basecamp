import { forwardRef, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ButtonIcon from "../buttons/ButtonIcon";
import { motion } from "framer-motion";

const AddFiles = () => {
    const [files,setFile] = useState([]);
    
    const onSelectFile = event =>{
        const fileSlected = Array.from(event.target.files);
        const linksImage = fileSlected.map((fl) =>{
            return URL.createObjectURL(fl);
        })
        setFile([...files,...linksImage]);
    }
    useEffect(() =>{
        // console.log(files);
    },[files])
    return (
        <>
        <div className="w-full h-[70px] relative bg-gray-300 rounded border-double border-[4px] flex justify-center items-center mb-2">
        <p className="text-[14px] font-bold text-gray-500">Drag or tap to add your files here !</p>
        <input className="cursor-pointer absolute top-0 left-0 w-full h-full select-none border-none outline-none opacity-0" onChange={onSelectFile} multiple accept="image/png,image/jpg,image/jpeg" type="file"/>
        </div>
        <div className="overflow-y-scroll hidden-scroll max-h-[60vh] py-4">
            <motion.div className="flex flex-wrap">
            {files.map((file,i,_) =>{
                return (
                    <MotionImageModel layout linkImage={file} key={i} onDelete={(link =>{
                        files.splice(files.indexOf(link),1);
                        setFile([...files]);
                    })}/>
                )
            })}
            </motion.div>
        </div>
        <ButtonIcon icon={null} className="bg-green-500 w-full mt-4 rounded text-white text-center">
                <p className="w-full">Upload files</p>
            </ButtonIcon>
        </>
    );
}
/**
 * 
 * @param {{linkImage : string,onDelete : (link : string) => void}} param0 
 * @returns 
 */
const ImageModel = forwardRef(({linkImage = "",onDelete},ref) =>{
    const onClick = (link) =>{
        if(onDelete){
            onDelete(linkImage);
        }
    }
    return (
        <div ref={ref} className="grow-[1] h-[200px] relative group p-1">
            <ButtonIcon onClick={onClick} icon={<IoClose/>} className="absolute bg-white top-[8px] right-[8px] px-[0px] py-[0px] w-[20px] h-[20px] flex justify-center items-center rounded-[99px] opacity-[0.4] transition-all duration-500 group-hover:opacity-[1] shadow-xl"/>
            <img src={linkImage} className="h-full w-full object-cover object-top rounded"/>
        </div>
    )
})
const MotionImageModel = motion(ImageModel);
export default AddFiles;