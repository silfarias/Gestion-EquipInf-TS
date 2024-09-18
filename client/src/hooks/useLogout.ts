import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogoutProps } from "../types/props.types";
import { useAuthCont } from "./useAuthCont";

export const useLogout = (): LogoutProps => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const { logoutUser, userState } = useAuthCont();

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
