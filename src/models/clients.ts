import { DataTypes, Model, Sequelize, ForeignKey, INTEGER } from 'sequelize';

export class ClientsModel extends Model {

    declare name: string;
    declare contact: string;
    declare id_location: ForeignKey<number>;

    static initModel(instacia: Sequelize) {
        ClientsModel.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contact: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize: instacia,
            modelName: 'ClientsModel',
            tableName: 'clients',
            timestamps: false
        })
    }
}