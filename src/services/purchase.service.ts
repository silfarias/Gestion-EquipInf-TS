import { InferCreationAttributes } from "sequelize";
import { PurchaseDetailsModel } from "../models/purchase_details";


export class PurchaseService {
    async createPurchase(purchase: InferCreationAttributes<PurchaseDetailsModel>): Promise<PurchaseDetailsModel | void> {
        try {
            return await PurchaseDetailsModel.create(purchase);
        } catch (error) {
            console.error('error al registrar compra', error);
            throw error;
        }
    }
}