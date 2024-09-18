import { useNavigate } from 'react-router-dom';
import { useGetClients } from '../hooks/useGetClients';
import './css/formpurchase.css'
import { usePurchase } from '../hooks/usePurchase';
import { InputsPurchase } from '../types/input.types';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const FormPurchase = ({ price, stock }: { price: number, stock: number }) => {
    const { register, handleSubmit, watch } = useForm<InputsPurchase>();
    const { onSubmit, calculateTotal, total } = usePurchase();
    const { clients } = useGetClients();
    const navigate = useNavigate();

    const quantity = watch('quantity');

    useEffect(() => {
        if (quantity && price) {
            calculateTotal(Number(quantity), price);
        }
    }, [quantity, price]);

    return (
        <>
            <div className="contenedor-todo">
                <div className="container-purchase">
                    <h2 className="modal-title">Vender equipo informático a Organización</h2>
                    <h3>Equipo: </h3>
                    <form className="form-purchase" onSubmit={handleSubmit(onSubmit)}>
                        <div className="caja-inputs">
                            <label htmlFor="client_id">Cliente</label>
                            <select id="client_id" {...register('client_id', { required: true })}>
                                <option value="">Seleccione un cliente</option>
                                {clients.map((client) => (
                                    <option key={client.id} value={client.id}>
                                        {client.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="caja-inputs">
                            <label htmlFor="quantity">Cantidad de equipos</label>
                            <input type="number"
                                {...register('quantity', {
                                    required: true,
                                    min: 1,
                                    max: stock,
                                })}
                            />
                        </div>

                        <div className="caja-inputs">
                            <p>Total a pagar: ${total}</p>
                        </div>

                        <div className="form-buttons">
                            <button type="button" className="cancel-button" onClick={() => navigate(-1)}>Cancelar</button>
                            <button type="submit" className="save-button">Hacer entrega</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};