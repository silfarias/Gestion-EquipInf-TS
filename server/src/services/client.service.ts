import { ClientsModel } from "../models/clients";
import { InferCreationAttributes } from "sequelize";


export class ClientService {
    public async registerClient(client: InferCreationAttributes<ClientsModel>): Promise<ClientsModel | void> {
        try {
            return await ClientsModel.create(client)
        } catch (error) {
            console.error('error al registrar cliente', error);
            throw error;
        }
    }

    public async getAllClients(): Promise<ClientsModel[] | void> {
        try {
            const clients = await ClientsModel.findAll();
            if (!clients || clients.length === 0) {
                throw new Error('no hay clientes registrados');
            }
            return clients;
        } catch (error) {
            console.log('error al obtener clientes', error);
            throw error;
        }
    }

    public async getClientById(id: number): Promise<ClientsModel | void> {
        try {
            const client = await ClientsModel.findByPk(id);
            if (!client) {
                throw new Error('cliente no encontrado')
            }
            return client;
        } catch (error) {
            console.log('error al obtener el cliente', error);
            throw error;
        }
    }

    public async deleteClient(id: number): Promise<{ message: string }> {
        try {
            await ClientsModel.destroy({where: { id: id }})
            return { message: 'cliente eliminado del sistema'}
        } catch (error) {
            console.log("error al borrar cliente:", error);
            throw error;
        }
    }

    public async updateClient(id: number, clientUpdate: Object): Promise<ClientsModel | void> {
        try {
            const user = await ClientsModel.findByPk(id);
            if (!user) {
                throw new Error('usuario no encontrado')
            }
            return await user.update(clientUpdate)
        } catch (error) {
            console.log('error al editar usuario', error);
            throw error;
        }
    }
};