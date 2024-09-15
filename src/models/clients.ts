import { DataTypes, Model, Sequelize, ForeignKey, INTEGER } from 'sequelize';

export class ClientsModel extends Model {

    declare name: string;
    declare contact_phone: string;
    declare address: string;

    static initModel(instacia: Sequelize) {
        ClientsModel.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contact_phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize: instacia,
            modelName: 'ClientsModel',
            tableName: 'clients',
            timestamps: false
        })
    }
}