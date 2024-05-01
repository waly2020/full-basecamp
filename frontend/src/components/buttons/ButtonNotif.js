const ButtonNotif = ({ className,value = 0, children }) => {
  return <button className={`${className} relative`}>
  <p className="absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] px-1 rounded-[99px] text-[12px] z-10 font-bold">{value}</p>
  {children}
  </button>;
};

export default ButtonNotif;
