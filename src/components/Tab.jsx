import GetIcon from "./GetIcon";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ title, icon, handleClick, isFilterTab, isActiveTab }) => {
    const snap = useSnapshot(state);
    return (
        <button
            title={title}
            onClick={handleClick}
            className="tab-btn dark:text-white sm:text-2xl text-3xl"
        >
            <GetIcon icon={icon} className="" />
        </button>
    );
};

export default Tab;
