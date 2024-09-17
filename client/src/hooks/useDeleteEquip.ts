import { toast } from "sonner";
import { token } from "../constants/authentication";
import { urlBack } from "../constants/urlBack";

export const useDeleteEquip = () => {
    const deleteEquip = async (id: number) => {
        const response = await fetch(`${urlBack}/inventory/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            toast.error('Error al borrar equipo e inventario');
            throw new Error('Error al borrar equipo e inventario');
        } else {
            toast.success('Equipo e inventario eliminado');
            return response.json();
        }
    };
    return { deleteEquip };
};