import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

export class LocationModel extends Model {

    declare address: string;

    static initModel(instancia: Sequelize) {
        LocationModel.init({
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