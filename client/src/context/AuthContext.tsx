import { createContext, useEffect, useReducer } from "react";
import { AuthContextProps, AuthProviderProps, UserState } from "../interfaces/context.interface";
import { authReducer } from "../auth/authReducer";
import { initialState } from "./initialState";
import { type } from "../types/type";

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const storedUser = localStorage.getItem('userState');
        if (storedUser) {
            const userData: UserState = JSON.parse(storedUser);
            dispatch({ type: type.LOGIN, payload: userData });
        }
    }, []);

    useEffect(() => {
        if (state.isLogged) {
            localStorage.setItem('userState', JSON.stringify(state));
        } else {
            localStorage.removeItem('userState');
        }
    }, [state]);

    const loginUser = (user: UserState) => {
        dispatch({ type: type.LOGIN, payload: user });
    };
    const logoutUser = () => {
        dispatch({ type: type.LOGOUT });
    };
    
    return (
        <AuthContext.Provider value={{ userState: state, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};