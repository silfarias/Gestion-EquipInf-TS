import { Router } from "express";
import { PurchaseController } from "../controllers/purchase.controller";
import { authentication } from "../middlewares/authentication";
import { handleValidationErrors } from "../middlewares/validateResults";

const purchRoutes = Router();
const purchCtrl = new PurchaseController();

purchRoutes.post('/', handleValidationErrors, authentication, purchCtrl.createPurchase)

export { purchRoutes }