import { useNavigate } from 'react-router-dom';
import { useLoadEquip } from '../hooks/useLoadEquip';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDeleteEquip } from '../hooks/useDeleteEquip';


export const CardEquip = () => {
    const [expandedEquip, setExpandedEquip] = useState<number | null>(null);
    const navigate = useNavigate();

    const { equips } = useLoadEquip();
    const { deleteEquip } = useDeleteEquip();

    const toggleExpand = (equipId: number) => {
        setExpandedEquip(prevId => (prevId === equipId ? null : equipId));
    };

    return (
        <div className="equips-list">
            {equips.length === 0 ? (
                <h1>No hay equipos registrados, agrega unos</h1>
            ) : (
                equips.map((equip) => (
                    <div key={equip.id} className="equipment-card">
                        <div className="equipment-card-content">
                            <img alt={''} className="equipment-card-image" />
                            <h3 className="equipment-card-title">{equip.equipment.model}</h3>
                            <p className="equipment-card-mark">{equip.equipment.mark}</p>
                            <p className="equipment-card-stock">Stock disponible: {equip.stock} </p>
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
                                <p>Descripción: {equip.equipment.description}</p>
                                <p>Precio unitario: ${equip.unit_price} </p>
                                <p>Ubicación: {equip.location}</p>
                                <div className='equipment-options'>
                                    <FiEdit size={22} onClick={() => navigate(`/edit/${equip.equipment_id}`)} />
                                    <RiDeleteBin6Line
                                        size={22}
                                        onClick={() => deleteEquip(equip.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};