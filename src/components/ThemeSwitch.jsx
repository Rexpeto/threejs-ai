import useTheme from "../hook/useTheme.jsx";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch = () => {
    const { theme, handleTheme } = useTheme();
    return (
        <button onClick={handleTheme} className="dark:text-white outline-none">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
        </button>
    );
};

export default ThemeSwitch;
