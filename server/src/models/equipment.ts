import { Model, DataTypes, Sequelize, ForeignKey } from "sequelize";
import { InventoryModel } from "./inventory";

export class EquipmentModel extends Model {
    declare description: string | null;
    declare model: string;
    declare mark: string;
    declare date_acquisition: string;
    declare state: string;
    declare image: string | null;
    declare category_id: ForeignKey<number>;
    declare user_id: ForeignKey<number>;
    declare inventoy?: InventoryModel[];

    static initModel(instancia: Sequelize) {
        EquipmentModel.init({
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mark: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date_acquisition: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize: instancia,
            modelName: 'EquipmentModel',
            tableName: 'equipments',
            timestamps: false
        })
    }
}