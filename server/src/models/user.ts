import { Model, DataTypes, Sequelize, ForeignKey } from "sequelize";

export class UserModel extends Model {

    declare id: number;
    declare user_name: string;
    declare email: string;
    declare password: string;
    declare rol_id: ForeignKey<number>;

    static initModel(instancia: Sequelize) {
        UserModel.init({ 
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize: instancia,
            modelName: 'UserModel',
            tableName: 'users',
            timestamps: false
        })
    }
}