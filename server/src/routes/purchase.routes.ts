import { Router } from "express";
import { PurchaseController } from "../controllers/purchase.controller";
import { authentication } from "../middlewares/authentication";
import { handleValidationErrors } from "../middlewares/validateResults";
import { validateCreatePurchase } from "../models/schemas/purchase.shema";

const purchRoutes = Router();
const purchCtrl = new PurchaseController();

purchRoutes.post('/:equipment_id', validateCreatePurchase, handleValidationErrors, authentication, purchCtrl.createPurchase);
purchRoutes.get('/:id', authentication, purchCtrl.getPurchaseById)
purchRoutes.get('/', authentication, purchCtrl.getAllPurchases)

export { purchRoutes }