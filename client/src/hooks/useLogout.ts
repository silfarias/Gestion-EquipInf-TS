import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { token } from "../constants/authentication";
import { LogoutProps } from "../types/props.types";

export const useLogout = (): LogoutProps => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        if (token) {
            setIsLoggedIn(true)
        }
    }, []);
    const handleLogout = (): void => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        toast.success('Sesión cerrada, !Hasta luego!');
        setTimeout(() => {
            navigate('/')
        }, 1500);
    };
    return { isLoggedIn, handleLogout }
};