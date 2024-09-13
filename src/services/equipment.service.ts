import { EquipmentModel } from "../models/equipment";
import { InferCreationAttributes } from "sequelize";

export class EquipmentService {

    async addEquipment(equip: InferCreationAttributes<EquipmentModel>, user_id: number): Promise<EquipmentModel | void> {
        try {
            equip.user_id = user_id;
            return await EquipmentModel.create(equip);
        } catch (error) {
            console.error('error al cargar equipo informático', error)
            throw error
        }
    }

    async getAllEquipments(): Promise<EquipmentModel[] | void> {
        try {
            return await EquipmentModel.findAll();
        } catch (error) {
            console.error('error al obtener equipos', error)
            throw error
        }
    }

    async getEquipById(id: number) {
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

    async deleteEquip(id: number) {
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

    async updateEquip(id: number, equipUpdate: Object) {
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
}