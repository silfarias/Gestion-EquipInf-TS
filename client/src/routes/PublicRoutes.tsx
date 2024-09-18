import { Navigate, Outlet } from "react-router-dom";
import { useAuthCont } from "../hooks/useAuthCont";

interface PublicRoutesProps {
    children?: JSX.Element;
    redirecTo?: string;
}

export const PublicRoutesConfig = ({ children, redirecTo = "/storage" }: PublicRoutesProps) => {
    const { userState } = useAuthCont();

    return userState.isLogged
        ? <Navigate to={redirecTo} />
        : children ? children : <Outlet />;
};