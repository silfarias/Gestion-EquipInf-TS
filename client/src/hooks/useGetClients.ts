import { useEffect, useState } from "react";
import { token } from "../constants/authentication";
import { urlBack } from "../constants/urlBack";
import { Clients } from "../types/reqres.types";

export const useGetClients = (): { clients: Clients[] } => {
    const [clients, setClients] = useState<Clients[]>([]);
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(`${urlBack}/client`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (!response.ok) {
                    throw new Error('Error al obtener los clientes');
                }
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        if (token) {
            fetchClients();
        } else {
            setClients([]);
        }
    }, [token]);
    return { clients };
}