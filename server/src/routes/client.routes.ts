import { ClientController } from "../controllers/client.controller";
import { Router } from "express";
import { handleValidationErrors } from "../middlewares/validateResults";
import { authentication } from "../middlewares/authentication";
import { valiClientSchema } from "../models/schemas/client.shema";

const clientRoutes = Router();
const clientCtrl = new ClientController();

clientRoutes.post('/', valiClientSchema, handleValidationErrors, authentication, clientCtrl.registerClient);
clientRoutes.get('/', authentication, clientCtrl.getAllClients);
clientRoutes.get('/:id', authentication, clientCtrl.getClientById);
clientRoutes.put('/:id', valiClientSchema, handleValidationErrors, authentication, clientCtrl.updateClient);
clientRoutes.delete('/:id', authentication, clientCtrl.deleteClient);

export { clientRoutes }