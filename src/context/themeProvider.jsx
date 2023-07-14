import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const themeStorage = localStorage.getItem("theme");

        if (!themeStorage) {
            return localStorage.setItem("theme", theme);
        }

        setTheme(themeStorage);

        changeTheme();
    }, [theme]);

    const changeTheme = () => {
        if (theme === "dark") {
            document.body.classList.remove("light");
            document.body.classList.add(theme);
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add(theme);
        }
    };

    const handleTheme = e => {
        e.preventDefault();

        if (theme === "dark") {
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <ThemeContext.Provider value={{ handleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };

export default ThemeContext;
