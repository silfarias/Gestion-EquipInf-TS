import { DataTypes, Model, InferAttributes, InferCreationAttributes, Sequelize, ForeignKey } from 'sequelize';

export class PurchaseDetailsModel extends Model {

    declare quantity: number;
    declare total: number;
    declare id_client: ForeignKey<number>;
    declare id_equipment: ForeignKey<number>;

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
            timestamps: false
        })
    }
}