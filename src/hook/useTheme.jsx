import { useContext } from "react";
import ThemeContext from "../context/themeProvider.jsx";

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
