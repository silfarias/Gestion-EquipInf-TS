import { InferCreationAttributes } from 'sequelize';
import { InventoryModel } from '../models/inventory';
import { EquipmentModel } from '../models/equipment';

export class InventoryService {
    public async addToInventory(inventory: InferCreationAttributes<InventoryModel>): Promise<InventoryModel> {
        try {
            const equipment = await EquipmentModel.findByPk(inventory.equipment_id);
            if (!equipment) {
                throw new Error('equipo no encontrado');
            }
            return await InventoryModel.create(inventory);
        } catch (error) {
            console.log('Error al cargar al inventario', error);
            throw error;
        }
    }

    public async updateInventory(id: number, inventoryUpdate: Partial<InferCreationAttributes<InventoryModel>>): Promise<InventoryModel> {
        try {
            const inventory = await InventoryModel.findByPk(id);
            if (!inventory) {
                throw new Error('Inventario no encontrado');
            }
            return await inventory.update(inventoryUpdate);
        } catch (error) {
            console.log('Error al editar inventario', error);
            throw error;
        }
    }

    public async getAllInventories(): Promise<InventoryModel[]> {
        try {
            return await InventoryModel.findAll();
        } catch (error) {
            console.error('Error al obtener inventarios', error);
            throw error;
        }
    }

    public async getInventoryById(id: number): Promise<InventoryModel> {
        try {
            const inventory = await InventoryModel.findByPk(id);
            if (!inventory) {
                throw new Error('Inventario no encontrado');
            }
            return inventory;
        } catch (error) {
            console.error('Error al obtener inventario', error);
            throw error;
        }
    }

    public async deleteEquip(id: number): Promise<{ message: string }> {
        try {
            const result = await InventoryModel.destroy({ where: { id } });
            if (!result) {
                throw new Error('Inventario no encontrado');
            }
            return { message: 'Inventario eliminado' };
        } catch (error) {
            console.error("Error al borrar inventario:", error);
            throw error;
        }
    }
};