import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { useNavigate } from 'react-router-dom';
import { InputsUpd } from '../types/input.types';
import { token } from '../constants/authentication';
import { useEffect, useState } from 'react';

export const useEditEquip = (id: number) => {
    const navigate = useNavigate();
    const [equipmentData, setEquipmentData] = useState<InputsUpd | null>(null);

    useEffect(() => {
        const fetchEquip = async () => {
            try {
                const response = await fetch(`${urlBack}/equip/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error('Error al obtener equipo e inventario');
                const data = await response.json();
                setEquipmentData(data);
            } catch (error) {
                console.error('Error al obtener los datos del equipo:', error);
                toast.error('Error al obtener los datos del equipo');
            }
        }
        fetchEquip();
    }, [id]);

    const updateEquip = async (data: InputsUpd) => {
        try {
            const response = await fetch(`${urlBack}/equip/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar equipo e inventario');
            }
            const result = await response.json();
            toast.success('Equipo e inventario actualizados correctamente');
            navigate('/storage');
            return result;
        } catch (error) {
            console.error('Error al actualizar equipo e inventario:', error);
            toast.error('Error al actualizar equipo e inventario');
        }
    };
    return { equipmentData, updateEquip };
};