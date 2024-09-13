import { PurchaseService } from "../services/purchase.service";
import { Request, Response } from "express";
import { handleControllerError } from "../utils/errorHandler";

export class PurchaseController {
    private purchaseService: PurchaseService;
    
    constructor() {
        this.purchaseService = new PurchaseService();
    }

    createPurchase = async (req: Request, res: Response) => {
        try {
            const { id_equipment } = req.params;
            const purchaseData = req.body;
            purchaseData.id_equipment = Number(id_equipment);
            const purchase = await this.purchaseService.createPurchase(purchaseData);
            return res.status(201).json(purchase);
        } catch (error) {
            return handleControllerError(error, res)
        }
    }
}