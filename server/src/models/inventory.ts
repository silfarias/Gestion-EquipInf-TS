import { Model, DataTypes, Sequelize, ForeignKey } from "sequelize";

export class InventoryModel extends Model {
    declare location: string | null;
    declare unit_price: number;
    declare stock: number;
    declare equipment_id: ForeignKey<number>;

    static initModel(instancia: Sequelize) {
        InventoryModel.init({
            location: {
                type: DataTypes.STRING,
                allowNull: true
            },
            unit_price: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize: instancia,
            modelName: 'InventoryModel',
            tableName: 'inventory',
            timestamps: true
        })
    }
}