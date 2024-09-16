import { Request, Response } from "express";
import { handleControllerError } from "../utils/errorHandler"; 
import { ClientService } from "../services/client.service";

export class ClientController {
    private clientService: ClientService;

    constructor() {
        this.clientService = new ClientService();
    }

    public registerClient = async (req: Request, res: Response): Promise<Response> => {
        try {
            const clientData = req.body;
            const newClient = await this.clientService.registerClient(clientData);
            return res.status(201).json(newClient);
        } catch (error) {
            console.log(error);
            return handleControllerError(error, res);
        }
    }

    public getAllClients = async (req: Request, res: Response): Promise<Response> => {
        try {
            const clients = await this.clientService.getAllClients();
            return res.status(200).json(clients);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public getClientById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const client = await this.clientService.getClientById(Number(id));
            return res.status(200).json(client);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public deleteClient = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const message = await this.clientService.deleteClient(Number(id));
            return res.status(200).json(message);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public updateClient = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const clientUpdate = req.body;
            const updatedClient = await this.clientService.updateClient(Number(id), clientUpdate);
            return res.status(200).json(updatedClient);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }
}