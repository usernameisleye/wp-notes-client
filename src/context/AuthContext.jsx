import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

// Provider
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("user"));

    //     if(user){
    //         dispatch({type: "LOGIN", payload: user});
    //     }
    // }, []);

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}

// Hook
export const useAuthContext = () => {
    const user = useContext(AuthContext);

    if(!user){
        throw Error("useAuthContext must be inside a AuthContextProvider")
    }

    return user;
}