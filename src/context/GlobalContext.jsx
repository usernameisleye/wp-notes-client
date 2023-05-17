import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Context
export const GlobalContext = createContext();

// Provider
export const GlobalContextProvider = ({ children }) => {
    // Avatar src state
    const [avatarSrc, setAvatarSrc] = useLocalStorage("avatar", null);
    // Search vlaue state
    const [search, setSearch] = useState("");

    return(
        <GlobalContext.Provider value={{ avatarSrc, search, setAvatarSrc, setSearch }}>
            { children }
        </GlobalContext.Provider>
    );
};

// Hook
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if(!context){
        throw Error("useGlobalContext must be used inside a GlobalContextProvider");
    }

    return context;
};