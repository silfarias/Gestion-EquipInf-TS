import { ClientController } from "../controllers/client.controller";
import { Router } from "express";
import { handleValidationErrors } from "../middlewares/validateResults";
import { authentication } from "../middlewares/authentication";

const clientRoutes = Router();
const clientCtrl = new ClientController();

clientRoutes.post('/',handleValidationErrors, authentication, clientCtrl.registerClient);
clientRoutes.get('/', authentication, clientCtrl.getAllClients);
clientRoutes.get('/:id', authentication, clientCtrl.getClientById);
clientRoutes.put('/:id', handleValidationErrors, authentication, clientCtrl.updateClient);
clientRoutes.delete('/:id', authentication, clientCtrl.deleteClient);

export { clientRoutes }