import { EquipmentModel } from "../models/equipment";
import { InferCreationAttributes } from "sequelize";
import { InventoryModel } from "../models/inventory";

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

    public async getEquipById(id: number): Promise<any> {
        try {
            const equip = await EquipmentModel.findByPk(id, {
                include: [{ 
                    model: InventoryModel,
                    as: 'inventory',
                    attributes: ['location', 'unit_price', 'stock']
                }],
            });
            if (!equip) throw new Error('equipo informático no encontrado')
            const equipData = equip.get({ plain: true });
            const inventory = equipData.inventory?.length ? equipData.inventory[0] : null;
            return {
                ...equipData,
                inventory
            };
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

    public async updateEquip(id: number, equipUpdate: Partial<EquipmentModel>, location: string, unit_price: number, stock: number): Promise<EquipmentModel | void> {
        try {
            const equip = await EquipmentModel.findByPk(id);
            if (!equip) throw new Error('equipo informático no encontrado')
            await equip.update(equipUpdate)
            const inventories = await InventoryModel.findAll({ where: { equipment_id: id } });
            if (inventories.length > 0) {
                for (const inventory of inventories) {
                    await inventory.update({ location, unit_price, stock });
                }
            }
            return equip;
        } catch (error) {
            console.log('error al editar equipo informático', error);
            throw error;
        }
    }
};