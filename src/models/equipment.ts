import { Model, DataTypes, Sequelize, ForeignKey } from "sequelize";

export class EquipmentModel extends Model {
    declare serial_number: number;
    declare description: string;
    declare model: string;
    declare mark: string;
    declare date_acquisition: string;
    declare location: string;
    declare state: string;
    declare stock_total: number;
    declare category_id: ForeignKey<number>;
    declare user_id: ForeignKey<number>;

    static initModel(instancia: Sequelize) {
        EquipmentModel.init({
            serial_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
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
                allowNull: false
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stock_total: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize: instancia,
            modelName: 'EquipmentModel',
            tableName: 'equipments',
            timestamps: false
        })
    }
}