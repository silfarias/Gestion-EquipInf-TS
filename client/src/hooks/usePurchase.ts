import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { useNavigate, useParams } from 'react-router-dom';
import { token } from '../constants/authentication';
import { InputsPurchase } from '../types/input.types';

export const usePurchase = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const onSubmit = async (data: InputsPurchase) => {
        try {
            const response = await fetch(`${urlBack}/purchase/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)

            })
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Error al registrar compra');
            };
            toast.success(result.message);
            setTimeout(() => {
                navigate('/storage');
            }, 1200)
        } catch (error) {
            throw error
        }
    }
    return { onSubmit }
};