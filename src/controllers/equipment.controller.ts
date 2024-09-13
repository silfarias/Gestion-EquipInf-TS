import { EquipmentService } from "../services/equipment.service";
import { Request, Response } from "express";
import { handleControllerError } from "../utils/errorHandler";

interface CustomRequest extends Request {
    user?: { id: number };
}

export class EquipmentController {
    private equipmentService: EquipmentService;

    constructor() {
        this.equipmentService = new EquipmentService();
    }

    addEquipment = async (req: CustomRequest, res: Response): Promise<Response> => {
        try {
            const { category_id } = req.params;
            const equipData = req.body
            equipData.category_id = Number(category_id);
            if (!req.user || !req.user.id) {
                return res.status(401).json({ message: 'usuario no autenticado' });
            }
            const equip = await this.equipmentService.addEquipment(req.body, req.user.id);
            return res.status(201).json(equip);
        } catch (error) {
            return handleControllerError(error, res)
        }
    }

    getAllEquipments = async (req: Request, res: Response): Promise<Response> => {
        try {
            const equipments = await this.equipmentService.getAllEquipments();
            return res.status(200).json(equipments);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };

    getEquipById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const equip = await this.equipmentService.getEquipById(Number(id));
            return res.status(200).json(equip);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };

    updateEquip = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const equipData = req.body;
            const updatedEquip = await this.equipmentService.updateEquip(Number(id), equipData);
            return res.status(200).json(updatedEquip);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };

    deleteEquip = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const result = await this.equipmentService.deleteEquip(Number(id));
            return res.status(200).json(result);
        } catch (error) {
            return handleControllerError(error, res);
        }
    };
}