const TitleIcon = ({icon,children}) => {
    return (
        <h2 className="flex gap-4 items-center text-[20px] font-bold">
            {icon}
            <span>{children}</span>
        </h2>
    );
}

export default TitleIcon;