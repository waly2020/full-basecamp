const ButtonLoader = ({className,onClick,children}) => {
    const canClick = () => {
        if(onClick){
            onClick();
        }
    }
    return (
        <div className={`${className} py-3 px-2`}>
            <button onClick={canClick} className="text-center w-full">
                {children}
            </button>
        </div>
    );
}

export default ButtonLoader;