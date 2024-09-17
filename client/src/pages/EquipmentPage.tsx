import Header from '../components/Header';
import { useState } from 'react';
import { FormEquip } from '../components';
import { CardEquip } from '../components/CardEquip';
import './css/equipmentpage.css';

export const EquipmentPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openEquipModal = () => setIsModalOpen(true);
    const closeEquipModal = () => setIsModalOpen(false);


    return (
        <>
            <Header />
            <div className="contenedor-equips">
                <div className="navbar-equips">
                    <h1>Equipos Informáticos</h1>
                    <button type='submit' onClick={openEquipModal}>Añadir Equipo</button>
                </div>
                <CardEquip />
            </div>
            <FormEquip isOpen={isModalOpen} onClose={closeEquipModal} />
        </>
    );
};