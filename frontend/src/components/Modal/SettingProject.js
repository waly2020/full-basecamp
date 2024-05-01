import ButtonIcon from "../buttons/ButtonIcon";
import InputIcons from "../inputs/InputIcons";

const SettingProject = () => {
    return (
        <div>
            <InputIcons type="text" placeholder="Project name..."/>
            <textarea placeholder="Project description..." className="resize-none w-full min-h-[100px] p-3 bg-gray-100 mt-4 rounded"/>
            <ButtonIcon className="bg-green-500 w-full rounded text-white mt-3">
                <p className="text-center w-full">
                    set project.
                </p>
            </ButtonIcon>
        </div>
    );
}

export default SettingProject;