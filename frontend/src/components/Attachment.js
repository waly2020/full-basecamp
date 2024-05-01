const Attachment = ({src = "",onClick}) => {
    const onClickImage = () =>{
        if(onClick){
            onClick();
        }
    }
    return (
        <button onClick={onClickImage} className="w-[80px] h-[80px] shadow transition-all duration-200 hover:scale-[1.2]">
            <img loading="lazy" className="w-full h-full object-cover" src={src} alt="attachment"/>
        </button>
    );
}

export default Attachment;