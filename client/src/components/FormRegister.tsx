import { useForm } from 'react-hook-form';
import { InputsRegister } from "../types/input.types";
import { useRegister } from '../hooks/useRegister';
import './css/formlogin.css'
import { Link } from 'react-router-dom';

export const FormRegister = () => {
    const { register, handleSubmit } = useForm<InputsRegister>();
    const { onSubmit } = useRegister()

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
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            placeholder="Ingresa tu email"
                            {...register('email')}
                        />
                    </div>
                    <div className="form-group-login">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="Ingresa tu contraseña"
                            {...register('password')}
                        />
                    </div>
                    <button type="submit" className="submit-login">Registrarse</button>
                    <div className="form-login-options">
                        <p>Ya tienes una cuenta? <Link to="/">Loguearse</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}