import { ReactNode } from "react";

export interface UserState {
    token?: string;
    isLogged: boolean;
    user?: {
        id: number;
        user_name: string;
        email: string;
        rol_id: number;
    };
}

export interface Action {
    type: string;
    payload?: {
        token?: string;
        user?: {
            id: number;
            user_name: string;
            email: string;
            rol_id: number;
        };
    };
};

export interface AuthContextProps {
    userState: UserState;
    loginUser: (user: UserState) => void;
    logoutUser: () => void;
    
}

export interface AuthProviderProps {
    children: ReactNode;
}