import { useEffect, useState } from "react";
import { urlBack } from "../constants/urlBack";
import { Equipment } from "../interfaces/reqres.interface";

export const useLoadEquip = (): { equips: Equipment[] } => {
    const [equips, setEquips] = useState<Equipment[]>([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const response = await fetch(`${urlBack}/equip`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Error al obtener los equipos');
                }
                const data = await response.json();
                setEquips(data);
            } catch (error) {
                throw error;
            }
        };
        if (token) {
            fetchEquipments();
        } else {
            setEquips([]);
        }
    }, [token]);
    return { equips };
};