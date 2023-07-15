import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import * as Hi from "react-icons/hi";
import * as Tb from "react-icons/tb";

const GetIcon = ({ icon, className }) => {
    const getIcon = iconName => {
        const iconsMap = new Map();
        iconsMap.set("Bs", Bs);
        iconsMap.set("Ai", Ai);
        iconsMap.set("Hi", Hi);
        iconsMap.set("Tb", Tb);

        return iconsMap.get(iconName.substring(0, 2));
    };

    const icons = getIcon(icon);
    const TheIcon = icons[icon];

    return <TheIcon className={className} />;
};

export default GetIcon;
