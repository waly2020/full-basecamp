import Filter from "../Filter";
import InputIcons from "../inputs/InputIcons";
import { IoSearch } from "react-icons/io5";

const Searsh = () => {
    return (
        <div className="grid grid-cols-[1fr,50px] max-w-[500px] h-[45px] mx-auto mt-6 gap-4">
            <InputIcons icon={<IoSearch/>} placeholder="Searsh your project..."/>
            <Filter/>
        </div>
    );
}

export default Searsh;