import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { useNavigate } from 'react-router-dom';

export type Inputs = {
    user_name: string,
    password: string
};

export const useFormLogin = () => {
    const navigate = useNavigate();
    const onSubmit = async (data: Inputs) => {
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
            setTimeout(() => {
                navigate('/storage');
            }, 1500)
        } catch (error: any) {
            throw error
        }
    }
    return { onSubmit }
}