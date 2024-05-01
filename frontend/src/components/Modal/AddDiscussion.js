import ButtonIcon from "../buttons/ButtonIcon";
import InputIcons from "../inputs/InputIcons";

const AddDiscussion = () => {
    return (
        <div>
            <InputIcons placeholder="Discussion title..."/>
            <ButtonIcon icon={<></>} className="bg-green-500 text-white w-full mt-6 mb-2 rounded">
                <p className="w-full text-center">Add discussion</p>
            </ButtonIcon>
        </div>
    );
}

export default AddDiscussion;