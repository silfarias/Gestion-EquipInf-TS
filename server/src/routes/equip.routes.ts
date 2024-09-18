import { EquipmentController } from "../controllers/equipment.controller";
import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import { handleValidationErrors } from "../middlewares/validateResults";
import { valiEquipSchema } from "../models/schemas/equipment.shema";


const equipRoutes = Router();
const equipCtrl = new EquipmentController();

equipRoutes.post('/:category_id', 
    valiEquipSchema, 
    handleValidationErrors, 
    authentication,
    equipCtrl.addEquipment
);
equipRoutes.get('/', handleValidationErrors, authentication, equipCtrl.getAllEquipments);
equipRoutes.get('/:id', authentication, equipCtrl.getEquipById);
equipRoutes.put('/:id', valiEquipSchema, handleValidationErrors, authentication, equipCtrl.updateEquip);
equipRoutes.delete('/:id', authentication, equipCtrl.deleteEquip);

export { equipRoutes }