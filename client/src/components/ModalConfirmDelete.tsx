import { IoClose } from "react-icons/io5";
import { useDeleteEquip } from "../hooks/useDeleteEquip";
import './css/deleteformequip.css';

interface ModalConfirmDeleteProps {
    onClose: () => void;
    onConfirm: (id: number) => void;
    equip: { id: number; model: string };
}

export const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({ onClose, onConfirm, equip }) => {
    const { deleteEquip } = useDeleteEquip();

    const handleEliminarEquip = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const isDeleted = await deleteEquip(equip.id);
            if (isDeleted) {
                onConfirm(equip.id);
            }
            onClose();
        } catch (error) {
            console.error('Error al eliminar el equipo:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <IoClose className="close-button" onClick={onClose} />
                </div>
                <form className="form" onSubmit={handleEliminarEquip}>
                    <div className="form-group">
                        <h3>
                            ¿Estás seguro que deseas eliminar el equipo&nbsp;
                            <strong>"{equip.model}"</strong>?
                        </h3>
                    </div>
                    <div className="buttons-confirm">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="confirm-button"
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};