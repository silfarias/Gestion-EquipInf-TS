import { toast } from 'sonner';
import { urlBack } from '../constants/urlBack';
import { Inputs } from '../types/input.types';
import { token } from '../constants/authentication';

export const useRegisterEquip = () => {
    const onSubmit = async (data: Inputs) => {
        try {
            const equipmentResponse = await fetch(`${urlBack}/equip/${data.category_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            const equipmentResult = await equipmentResponse.json();
            if (!equipmentResponse.ok) {
                throw new Error(equipmentResult.message || 'Error al registrar el equipo');
            }
            const equipment_id = equipmentResult.id;

            const inventoryData = {
                equipment_id,
                location: data.location,
                unit_price: data.unit_price,
                stock: data.stock,
            };

            const inventoryResponse = await fetch(`${urlBack}/inventory/${equipment_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(inventoryData)
            });

            const inventoryResult = await inventoryResponse.json();
            if (!inventoryResponse.ok) {
                throw new Error(inventoryResult.message || 'Error al añadir al inventario');
            }
            toast.success('Equipo registrado y añadido al inventario exitosamente');
        } catch (error: any) {
            toast.error('Error al registrar el equipo');
            console.error('Error:', error);
        }
    };
    return { onSubmit };
};