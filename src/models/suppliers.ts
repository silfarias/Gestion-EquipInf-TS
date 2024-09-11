import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { dbConfig } from '../database/dataBaseConfig';

class SupplierModel extends Model<InferAttributes<SupplierModel>, InferCreationAttributes<SupplierModel>> {
    declare id: number;
    declare name: string;
    declare info_contact: string | null;
    declare email: string;
    declare address: string;
}

// SupplierModel.init({
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     info_contact: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     address: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     sequelize: dbConfig.sequelize,
//     modelName: 'SupplierModel',
//     tableName: 'suppliers',
//     timestamps: false
// })