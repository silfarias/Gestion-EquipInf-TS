import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../context/AuthContext";
import { LogoutProps } from "../types/props.types";

export const useLogout = (): LogoutProps => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error("useLogout must be used within an AuthProvider");
    const { logoutUser, userState } = authContext;

    useEffect(() => {
        if (userState.isLogged) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [userState.isLogged]);

    const handleLogout = (): void => {
        logoutUser();
        localStorage.removeItem('token');
        toast.success('Sesión cerrada, ¡Hasta luego!');
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };
    return { isLoggedIn, handleLogout };
};
