import { Request, Response } from 'express';
import { InventoryService } from "../services/inventory.service";

export class InventoryController {
    private inventoryService: InventoryService;

    constructor() {
        this.inventoryService = new InventoryService();
    }

    public addToInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { equipment_id } = req.params;
            const inventoryData = req.body;
            inventoryData.equipment_id = Number(equipment_id);
            const newInventory = await this.inventoryService.addToInventory(inventoryData);
            return res.status(201).json(newInventory);
        } catch (error) {
            return res.status(500).json({ message: 'Error al añadir al inventario', error });
        }
    }

    public getAllInventories = async (req: Request, res: Response): Promise<Response> => {
        try {
            const inventories = await this.inventoryService.getAllInventories();
            return res.status(200).json(inventories);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener inventarios', error });
        }
    }

    public getInventoryById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const inventory = await this.inventoryService.getInventoryById(Number(id));
            return res.status(200).json(inventory);
        } catch (error) {
            return res.status(404).json({ message: 'Inventario no encontrado', error });
        }
    }

    public updateInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const inventoryUpdate = req.body;
            const updatedInventory = await this.inventoryService.updateInventory(Number(id), inventoryUpdate);
            return res.status(200).json(updatedInventory);
        } catch (error) {
            return res.status(500).json({ message: 'Error al actualizar inventario', error });
        }
    }

    public deleteInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const result = await this.inventoryService.deleteInvEquip(Number(id));
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error al eliminar inventario y equipo', error });
        }
    };
}