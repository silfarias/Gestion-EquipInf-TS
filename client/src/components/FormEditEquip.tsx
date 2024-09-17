import { useForm } from "react-hook-form";
import { useEditEquip } from "../hooks/useEditEquip";
import { Inputs } from "../types/input.types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import './css/formeditequip.css'

export const FormEditEquip = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm<Inputs>();
    const { equipmentData, updateEquip } = useEditEquip(Number(id));

    useEffect(() => {
        if (equipmentData) {
            Object.keys(equipmentData).forEach((key) => {
                setValue(key as keyof Inputs, equipmentData[key as keyof Inputs]);
            });
        }
    }, [equipmentData, setValue]);

    const submitHandler = (data: Inputs) => {
        updateEquip(data);
    };
    return (
        <>
            <div className="contenedor-todo">
                <div className="container-edit">
                    <h2 className="modal-title">Editar Equipo Informático</h2>
                    <form onSubmit={handleSubmit(submitHandler)} className="equipment-form">

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
                                <input {...register('mark')} placeholder="Marca" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="model">Modelo</label>
                                <input {...register('model')} placeholder="Modelo" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="date_acquisition">Fecha de adquisición</label>
                                <input {...register('date_acquisition')} type="date" placeholder="Fecha de adquisición" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="state">Estado</label>
                                <input {...register('state')} placeholder="Estado" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="location">Ubicación</label>
                                <input {...register('location')} placeholder="Ubicación" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="Precio unitario">Precio Unitario</label>
                                <input {...register('unit_price')} type="number" placeholder="Precio Unitario" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="stock">Stock</label>
                                <input {...register('stock')} type="number" placeholder="Stock" />
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="description">Descripción</label>
                                <input {...register('description')} placeholder="Descripción" />
                            </div>
                            
                            <div className="form-buttons">
                                <button type="button" className="cancel-button" onClick={() => navigate(-1)}>Cancelar</button>
                                <button type="submit" className="save-button">Actualizar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};