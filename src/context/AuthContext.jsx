import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return { ...action.payload };
        case "LOGOUT":
            return null;
        case "SET_AVATAR":
            return { ...action.payload };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        data: null
    });

    // States
    // const [user, setUser] = useState(null);
    // const [avatarSrc, setAvatarSrc] = useState(null);

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}