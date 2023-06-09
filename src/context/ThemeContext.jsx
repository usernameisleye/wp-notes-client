import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    // Checking user default theme
    const defaultDark = window.matchMedia("(prefers-color-scheme: light)").matches;

    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? true : false)

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    
    if(!theme){
        throw Error("useThemeContext must be used inside a ThemeContextProvider");
    }

    return theme;
}