import ButtonIcon from "../buttons/ButtonIcon";
import InputIcons from "../inputs/InputIcons";

const AddNewTask = () => {
    return (
        <div>
            <InputIcons placeholder="Task title"/>
            <ButtonIcon className="bg-green-500 text-white w-full mt-6 mb-1 rounded">
                <p className="text-center w-full">Add new task</p>
            </ButtonIcon>
        </div>
    );
}

export default AddNewTask;