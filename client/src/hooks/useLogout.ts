import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

export const useLogout = (): { isLoggedIn: boolean, handleLogout: () => void } => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        const token: string | null = localStorage.getItem('token');
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