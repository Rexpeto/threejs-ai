import * as Bs from "react-icons/bs";
import * as Fi from "react-icons/fi";
import * as Hi from "react-icons/hi";
import * as Tb from "react-icons/tb";

const GetIcon = ({ icon, className }) => {
    const getIcon = iconName => {
        const iconsMap = new Map();
        iconsMap.set("Bs", Bs);
        iconsMap.set("Fi", Fi);
        iconsMap.set("Hi", Hi);
        iconsMap.set("Tb", Tb);

        return iconsMap.get(iconName.substring(0, 2));
    };

    const icons = getIcon(icon);
    const TheIcon = icons[icon];

    return <TheIcon className={className} />;
};

export default GetIcon;
