import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthCont = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('No hay contexto de autenticación');
    }
    return context;
};