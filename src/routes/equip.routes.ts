import { EquipmentController } from "../controllers/equipment.controller";
import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import { checkRole } from "../middlewares/checkRole";
import { handleValidationErrors } from "../middlewares/validateResults";
import { valiEquipSchema } from "../models/schemas/equipment.shema";


const equipRoutes = Router();
const equipCtrl = new EquipmentController();

equipRoutes.post('/:category_id', 
    valiEquipSchema, 
    handleValidationErrors, 
    authentication, 
    checkRole(1), 
    equipCtrl.addEquipment
);
equipRoutes.get('/', authentication, equipCtrl.getAllEquipments);
equipRoutes.get('/:id', authentication, equipCtrl.getEquipById);
equipRoutes.put('/:id', valiEquipSchema, handleValidationErrors, authentication, equipCtrl.updateEquip);
equipRoutes.delete('/:id', authentication, checkRole(1), equipCtrl.deleteEquip);

export { equipRoutes }