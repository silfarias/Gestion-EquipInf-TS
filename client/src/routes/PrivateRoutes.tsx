import { Navigate, Outlet } from "react-router-dom";
import { useAuthCont } from "../hooks/useAuthCont";

interface PrivateRoutesProps {
  children?: JSX.Element;
  redirecTo?: string;
}

export const PrivateRoutesConfig = ({ children, redirecTo = "/" }: PrivateRoutesProps) => {
  const { userState } = useAuthCont();

  return !userState.isLogged 
    ? <Navigate to={redirecTo} /> 
    : children ? children : <Outlet />;
};