import { InferCreationAttributes } from "sequelize";
import { PurchaseDetailsModel } from "../models/purchase_details";
import { InventoryModel } from "../models/inventory";
import { ClientsModel } from "../models/clients";


export class PurchaseService {
    async createPurchase(purchase: InferCreationAttributes<PurchaseDetailsModel>): Promise<PurchaseDetailsModel | void> {
        const { client_id, equipment_id, quantity } = purchase;
        try {
            const client = await ClientsModel.findByPk(client_id);
            if (!client) {
                throw new Error('el cliente no esta registrado en el sistema');
            }
            const inventory = await InventoryModel.findOne({ where: { equipment_id } });
            if (!inventory) {
                throw new Error('el equipo no se encuentra en el inventario');
            }
            if (inventory.stock < quantity) {
                throw new Error('no hay suficiente stock del equipo para realizar la compra');
            }
            const total = inventory.unit_price * quantity;
            inventory.stock -= quantity;
            await inventory.save();
            const newPurchase = await PurchaseDetailsModel.create({
                ...purchase,
                total,
            });
            return newPurchase;
        } catch (error) {
            console.error('error al registrar compra', error);
            throw error;
        }
    }

    async getAllPurchases(): Promise<PurchaseDetailsModel[] | void> {
        try {
            return await PurchaseDetailsModel.findAll();
        } catch (error) {
            console.error('error al obtener los registros de compra', error)
            throw error
        }
    }

    async getPurchaseById(id: number) {
        try {
            const purchase = await PurchaseDetailsModel.findByPk(id);
            if (!purchase) {
                throw new Error('registro de compra no encontrado')
            }
            return purchase
        } catch (error) {
            console.error('error al obtener el registro de compra', error);
            throw error;
        }
    }
}