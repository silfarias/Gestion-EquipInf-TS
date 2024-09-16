import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';

export type Inputs = {
    model: string;
    mark: string;
    description: string | null;
    date_acquisition: string;
    state: string;
    category_id: number;
};

export const useRegisterEquip = () => {
    const token = localStorage.getItem('token');

    const onSubmit = async (data: Inputs) => {
        try {
            const response = await fetch(`${urlBack}/equip/${data.category_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Error al registrar el equipo');
            }
            toast.success('Equipo registrado exitosamente');
        } catch (error: any) {
            toast.error('Error al registrar el equipo');
            console.error('Error:', error);
        }
    };
    return { onSubmit };
};