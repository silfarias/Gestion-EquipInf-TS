import Header from '../components/Header';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useLoadEquip } from '../hooks/useLoadEquip';
import { useState } from 'react';
import { FormEquipModal, ModalConfirmDelete } from '../components';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import './css/equipmentpage.css';
import { useNavigate } from 'react-router-dom';

export const EquipmentPage = () => {
    const navigate = useNavigate();
    const { equips } = useLoadEquip();

    const [expandedEquip, setExpandedEquip] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [equipToDelete, setEquipToDelete] = useState<any | null>(null);

    const openEquipModal = () => setIsModalOpen(true);
    const closeEquipModal = () => setIsModalOpen(false);

    const openDeleteModal = (equip: any) => {
        setEquipToDelete(equip);
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setEquipToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const handleConfirmDelete = (id: number) => {
        console.log(`Equipo con ID ${id} eliminado`);
        closeDeleteModal();
    };

    const toggleExpand = (equipId: number) => {
        setExpandedEquip(prevId => (prevId === equipId ? null : equipId));
    };

    return (
        <>
            <Header />
            <div className="contenedor-equips">
                <div className="navbar-equips">
                    <h1>Equipos Informáticos</h1>
                    <button type='submit' onClick={openEquipModal}>Añadir Equipo</button>
                </div>

                <div className="equips-list">
                    {equips.map((equip) => (
                        <div key={equip.id} className="equipment-card">
                            <div className="equipment-card-content">
                                <img alt={`${equip.mark} ${equip.model}`} className="equipment-card-image" />
                                <h3 className="equipment-card-title">{equip.model}</h3>
                                <p className="equipment-card-mark">{equip.mark}</p>
                                <p className="equipment-card-stock">Stock disponible: </p>
                            </div>
                            <div className="equipment-card-footer">
                                <button
                                    type="button"
                                    className="toggle-details-button"
                                    onClick={() => toggleExpand(equip.id)}
                                >
                                    {expandedEquip === equip.id ? 'Ver menos' : 'Ver más'}
                                    {expandedEquip === equip.id ? (
                                        <FiChevronUp size={20} />
                                    ) : (
                                        <FiChevronDown size={20} />
                                    )}
                                </button>
                                <div className={`equipment-card-details ${expandedEquip === equip.id ? 'expand' : ''}`}>
                                    <p>Descripción: {equip.description}</p>
                                    <p>Estado: {equip.state}</p>
                                    <div className='equipment-options'>
                                        <FiEdit size={22} onClick={() => navigate(`/edit/${equip.id}`)} />
                                        <RiDeleteBin6Line
                                            size={22}
                                            onClick={() => openDeleteModal(equip)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isDeleteModalOpen && equipToDelete && (
                <ModalConfirmDelete
                    equip={equipToDelete}
                    onClose={closeDeleteModal}
                    onConfirm={handleConfirmDelete}
                />
            )}
            <FormEquipModal isOpen={isModalOpen} onClose={closeEquipModal} />
        </>
    );
};