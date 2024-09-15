import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller";
import { authentication } from "../middlewares/authentication";
import { handleValidationErrors } from "../middlewares/validateResults";

const invRoutes = Router()
const invCtrl = new InventoryController();

invRoutes.post('/:equipment_id', handleValidationErrors, authentication, invCtrl.addToInventory);
invRoutes.get('/', authentication, invCtrl.getAllInventories);
invRoutes.get('/:id', authentication, invCtrl.getInventoryById);
invRoutes.put('/:id', handleValidationErrors, authentication, invCtrl.updateInventory);
invRoutes.delete('/:id', authentication, invCtrl.deleteInventory);

export { invRoutes }