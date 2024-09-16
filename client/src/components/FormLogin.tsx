import { Inputs, useFormLogin } from "../hooks/useFormLogin";
import { useForm } from 'react-hook-form';
import './css/formlogin.css'

export const FormLogin = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const { onSubmit } = useFormLogin()

    return (
        <div className="main-form-login">
            <h3>Inicie Sesión</h3>
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
    );
}