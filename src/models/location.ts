import { Model, DataTypes, Sequelize } from "sequelize";

export class LocationModel extends Model {

    declare id: number;
    declare name: string;
    declare description: string;

    static initModel(instancia: Sequelize) {
        LocationModel.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 80]
                }
            }, 
            address: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize: instancia,
            modelName: 'LocationModel',
            tableName: 'locations',
            timestamps: false
        })
    }
}