import { EquipmentModel } from "../models/equipment";
import { InferCreationAttributes } from "sequelize";

export class EquipmentService {

    public async addEquipment(equip: InferCreationAttributes<EquipmentModel>, user_id: number): Promise<EquipmentModel | void> {
        try {
            equip.user_id = user_id;
            return await EquipmentModel.create(equip);
        } catch (error) {
            console.error('error al cargar equipo informático', error)
            throw error
        }
    }

    public async getAllEquipments(): Promise<EquipmentModel[] | void> {
        try {
            return await EquipmentModel.findAll();
        } catch (error) {
            console.error('error al obtener equipos', error)
            throw error
        }
    }

    public async getEquipById(id: number): Promise<EquipmentModel> {
        try {
            const equip = await EquipmentModel.findByPk(id);
            if (!equip) {
                throw new Error('equipo informático no encontrado')
            }
            return equip
        } catch (error) {
            console.error('error al obtener equipo informático', error);
            throw error;
        }
    }

    public async deleteEquip(id: number): Promise<{ message: string }> {
        try {
            const result = await EquipmentModel.destroy({ where: { id } });
            if (!result) {
                throw new Error('equipo informático no encontrado');
            }
            return { message: 'equipo informático eliminado' };
        } catch (error) {
            console.error("error al borrar equipo:", error);
            throw error;
        }
    }

    public async updateEquip(id: number, equipUpdate: Object): Promise<EquipmentModel | void> {
        try {
            const user = await EquipmentModel.findByPk(id);
            if (!user) {
                throw new Error('equipo informático no encontrado')
            }
            return await user.update(equipUpdate)
        } catch (error) {
            console.log('error al editar equipo informático', error);
            throw error;
        }
    }
};