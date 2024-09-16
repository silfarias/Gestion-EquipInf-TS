import { toast } from "sonner";
import { token } from "../constants/authentication";
import { urlBack } from "../constants/urlBack";

export const useDeleteEquip = () => {
    const deleteEquip = async (id: number) => {
        const response = await fetch(`${urlBack}/equip/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            toast.error('Error al borrar equipo');
            throw new Error('Error al borrar equipo');
        } else {
            toast.success('Equipo eliminado');
            return response.json();
        }
    };
    return { deleteEquip };
};