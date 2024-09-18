import { useFormLogin } from "../hooks/useFormLogin";
import { useForm } from 'react-hook-form';
import { InputsLogin } from "../types/input.types";
import './css/formlogin.css'
import { Link } from "react-router-dom";

export const FormLogin = () => {
    const { register, handleSubmit } = useForm<InputsLogin>();
    const { onSubmit } = useFormLogin()

    return (
        <>
        <div className="contenedor-todo">
            <div className="main-form-login">
                <h1>FormoTEX</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                    <div className="form-group-login">
                        <label htmlFor="user_name">User Name</label>
                        <input
                            id="user_name"
                            required
                            placeholder="Ingresa tu nombre de usuario"
                            {...register('user_name')}
                        />
                    </div>
                    <div className="form-group-login">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            required
                            {...register('password')}
                        />
                    </div>
                    <button type="submit" className="submit-login">Ingresar</button>
                    <div className="form-login-options">
                        <p>No tienes una cuenta? <Link to="/register">Registrate</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}