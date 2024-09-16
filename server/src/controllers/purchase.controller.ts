import { PurchaseService } from "../services/purchase.service";
import { Request, Response } from "express";
import { handleControllerError } from "../utils/errorHandler";

export class PurchaseController {
    private purchaseService: PurchaseService;
    
    constructor() {
        this.purchaseService = new PurchaseService();
    }

    public createPurchase = async (req: Request, res: Response) => {
        try {
            const { equipment_id } = req.params;
            const { client_id, quantity } = req.body;
            const purchaseData = {
                client_id: Number(client_id),
                equipment_id: Number(equipment_id),
                quantity: Number(quantity),
                total: Number(quantity)
            };
            const purchase = await this.purchaseService.createPurchase(purchaseData);
            return res.status(201).json(purchase);
        } catch (error) {
            return handleControllerError(error, res)
        }
    }

    public getAllPurchases = async (req: Request, res: Response): Promise<Response> => {
        try {
            const purchases = await this.purchaseService.getAllPurchases();
            return res.status(200).json(purchases);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };

    public getPurchaseById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const purchase = await this.purchaseService.getPurchaseById(Number(id));
            return res.status(200).json(purchase);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };
}