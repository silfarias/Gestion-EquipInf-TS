import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterEquip, Inputs } from "../hooks/useRegisterEquip";
import './css/formequip.css';

interface FormEquipModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormEquipModal: React.FC<FormEquipModalProps> = ({ isOpen, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const { onSubmit } = useRegisterEquip();

    const submitForm: SubmitHandler<Inputs> = (data) => {
        onSubmit(data);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Registrar Equipo Informático</h2>
                <form onSubmit={handleSubmit(submitForm)} className="equipment-form">
                    <label htmlFor="category_id">Categoría</label>
                    <select {...register("category_id", { required: true })} id="category_id">
                        <option value="">Seleccione una categoría</option>
                        <option value="1">Portátiles/Laptops</option>
                        <option value="2">Monitores</option>
                        <option value="3">Impresoras</option>
                        <option value="4">Celulares</option>
                        <option value="5">Tabletas</option>
                        <option value="6">Teclado/Ratón</option>
                        <option value="7">Accesorios</option>
                        <option value="8">Proyectores</option>
                        <option value="9">Almacenamiento Externo</option>
                        <option value="10">PC</option>
                    </select>
                    {errors.category_id && <span>Campo obligatorio</span>}

                    <label htmlFor="mark">Marca</label>
                    <input {...register("mark", { required: true })} id="mark" />
                    {errors.mark && <span>Campo obligatorio</span>}

                    <label htmlFor="model">Modelo</label>
                    <input {...register("model", { required: true })} id="model" />
                    {errors.model && <span>Campo obligatorio</span>}

                    <label htmlFor="description">Descripción</label>
                    <textarea {...register("description")} id="description" />

                    <label htmlFor="date_acquisition">Fecha de Adquisición</label>
                    <input type="date" {...register("date_acquisition", { required: true })} id="date_acquisition" />
                    {errors.date_acquisition && <span>Campo obligatorio</span>}

                    <label htmlFor="state">Estado</label>
                    <input {...register("state", { required: true })} id="state" />
                    {errors.state && <span>Campo obligatorio</span>}

                    <div className="form-buttons">
                        <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="save-button">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};