import { useNavigate } from 'react-router-dom';
import './css/formpurchase.css'
import { useGetClients } from '../hooks/useGetClients';

export const FormPurchase = () => {

    const navigate = useNavigate();
    const { clients } = useGetClients();

    return (
        <>
            <div className="contenedor-todo">
                <div className="container-edit">
                    <h2 className="modal-title">Vender equipo informático a Organización</h2>
                    <form className="equipment-form">

                        <div className="grid-container">

                            <div className="caja-inputs">
                                <label htmlFor="client_id">Cliente</label>
                                <select id="client_id">
                                    <option value="">Seleccione un cliente</option>
                                    {clients.map((client) => (
                                        <option value={client.id}>{client.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="caja-inputs">
                                <label htmlFor="quantity">Cantidad de equipos</label>
                                <input type='number' placeholder="Cantidad" />
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
    );
};