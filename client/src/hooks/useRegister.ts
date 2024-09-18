import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { useNavigate } from 'react-router-dom';
import { InputsRegister } from '../types/input.types';

export const useRegister = () => {
    
    const navigate = useNavigate();

    const onSubmit = async (data: InputsRegister) => {
        try {
            const response = await fetch(`${urlBack}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Error al registrar usuario');
            };
            toast.success(result.message);
            setTimeout(() => {
                navigate('/');
            }, 1200)
        } catch (error) {
            throw error
        }
    }
    return { onSubmit }
};