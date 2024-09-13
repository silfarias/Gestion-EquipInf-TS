import { EquipmentController } from "../controllers/equipment.controller";
import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import { checkRole } from "../middlewares/checkRole";
import { handleValidationErrors } from "../middlewares/validateResults";


const equipRoutes = Router();
const equipCtrl = new EquipmentController();

equipRoutes.post('/:category_id', authentication, equipCtrl.addEquipment);
equipRoutes.get('/', authentication, equipCtrl.getAllEquipments);
equipRoutes.get('/:id', authentication, equipCtrl.getEquipById);
equipRoutes.put('/:id', authentication, equipCtrl.updateEquip);
equipRoutes.delete('/:id', authentication, equipCtrl.deleteEquip);

export { equipRoutes }