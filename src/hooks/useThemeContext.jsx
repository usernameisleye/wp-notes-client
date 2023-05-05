import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    
    if(!theme){
        throw Error("useThemeContext must be used inside a ThemeContextProvider");
    }

    return theme;
}