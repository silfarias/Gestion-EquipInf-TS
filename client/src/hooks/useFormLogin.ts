import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { useNavigate } from 'react-router-dom';
import { InputsLogin } from '../types/input.types';
import { useAuthCont } from './useAuthCont';

export const useFormLogin = () => {
    
    const navigate = useNavigate();
    const { loginUser } = useAuthCont();

    const onSubmit = async (data: InputsLogin) => {
        try {
            const response = await fetch(`${urlBack}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Error al iniciar sesión');
            };
            toast.success(result.message);
            localStorage.setItem('token', result.token);
            loginUser({
                isLogged: true,
                token: result.token,
                user: result.user,
            });
            setTimeout(() => {
                navigate('/storage');
            }, 1500)
        } catch (error) {
            throw error
        }
    }
    return { onSubmit }
};