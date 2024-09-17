import { useFormLogin } from "../hooks/useFormLogin";
import { useForm } from 'react-hook-form';
import { InputsLogin } from "../types/input.types";
import './css/formlogin.css'

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
                            {...register('user_name')}
                        />
                    </div>
                    <div className="form-group-login">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            {...register('password')}
                        />
                    </div>
                    <button type="submit" className="submit-login">Ingresar</button>
                </form>
            </div>
        </div>
        </>
    );
}