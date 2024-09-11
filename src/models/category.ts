import { Model, DataTypes, Sequelize } from "sequelize";

export class CategoryModel extends Model {

    declare id: number;
    declare name: string;
    declare description: string;

    static initModel(instancia: Sequelize) {
        CategoryModel.init({ 
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 50]
                }
            }, 
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: [3, 100]
                }
            }
        }, {
            sequelize: instancia,
            modelName: 'CategoryModel',
            tableName: 'categories',
            timestamps: false
        })
    }
}