import { DataTypes, Model, Sequelize, ForeignKey } from 'sequelize';

export class PurchaseDetailsModel extends Model {

    declare quantity: number;
    declare total: number;
    declare client_id: ForeignKey<number>;
    declare equipment_id: ForeignKey<number>;

    static initModel(instacia: Sequelize) {
        PurchaseDetailsModel.init({
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            total: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
        }, {
            sequelize: instacia,
            modelName: 'PurchaseDetailsModel',
            tableName: 'purchase_details',
            timestamps: true
        })
    }
}