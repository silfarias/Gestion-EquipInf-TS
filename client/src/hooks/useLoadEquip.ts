import { useEffect, useState } from "react";
import { urlBack } from "../constants/urlBack";
import { Inventory } from "../interfaces/reqres.interface";
import { token } from "../constants/authentication";

export const useLoadEquip = (): { equips: Inventory[] } => {
    const [equips, setEquips] = useState<Inventory[]>([]);
    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const response = await fetch(`${urlBack}/inventory`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Error al obtener los equipos y sus inventarios');
                }
                const data: Inventory[] = await response.json();
                setEquips(data);
            } catch (error) {
                console.error(error);
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