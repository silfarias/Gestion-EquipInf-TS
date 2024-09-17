import { useForm } from "react-hook-form";
import { useEditEquip } from "../hooks/useEditEquip";
import { Inputs } from "../types/input.types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const FormEditEquip = () => {
    const { id } = useParams();
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
                <div className="main-form-edit">
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <input {...register('model')} placeholder="Modelo" />
                        <input {...register('mark')} placeholder="Marca" />
                        <input {...register('description')} placeholder="Descripción" />
                        <input {...register('date_acquisition')} type="date" placeholder="Fecha de adquisición" />
                        <input {...register('state')} placeholder="Estado" />
                        <input {...register('category_id')} type="number" placeholder="Categoría" />
                        <input {...register('location')} placeholder="Ubicación" />
                        <input {...register('unit_price')} type="number" placeholder="Precio Unitario" />
                        <input {...register('stock')} type="number" placeholder="Stock" />
                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            </div>
        </>
    )
}