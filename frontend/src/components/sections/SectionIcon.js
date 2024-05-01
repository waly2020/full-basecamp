const SectionIcon = ({icon,title,children}) => {
    return (
        <section className="w-full sm:grid grid-cols-[45px,1fr] grid-rows-[45px,1fr]">
            <div className="hidden sm:flex items-center text-[25px]">{icon}</div>
            <div className="text-[20px] font-bold flex items-center"><h2>{title}</h2></div>
            <div className="col-start-2">{children}</div>
        </section>
    );
}

export default SectionIcon;