import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterEquip } from "../hooks/useRegisterEquip";
import { FormEquipModalProps } from "../interfaces/props.interface";
import { Inputs } from "../types/input.types";
import './css/formequip.css';

export const FormEquip = ({ isOpen, onClose }: FormEquipModalProps) => {
    const { register, handleSubmit } = useForm<Inputs>();
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
                    <div className="grid-container">
                        
                        <div className="caja-inputs">
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
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="mark">Marca</label>
                            <input {...register("mark", { required: true })} id="mark" />
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="model">Modelo</label>
                            <input {...register("model", { required: true })} id="model" />
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="date_acquisition">Fecha de Adquisición</label>
                            <input type="date" {...register("date_acquisition", { required: true })} id="date_acquisition" />
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="state">Estado</label>
                            <input {...register("state", { required: true })} id="state" />
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="stock">Stock</label>
                            <input {...register("stock", { required: true })} id="stock" type="number" />
                        </div>


                        <div className="caja-inputs">
                            <label htmlFor="unit_price">Precio unitario</label>
                            <input {...register("unit_price", { required: true })} id="unit_price" />
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="location">Ubicación</label>
                            <select {...register("location")} id="location">
                                <option value="">Seleccione la Sucursal</option>
                                <option value="Ofinina Central">Oficina Central</option>
                                <option value="Sucursal 2">Sucursal 2</option>
                                <option value="Sucursal 3">Sucursal 3</option>
                            </select>
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="description">Descripción</label>
                            <textarea {...register("description")} id="description" />
                        </div>

                        <div className="form-buttons">
                            <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
                            <button type="submit" className="save-button">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};