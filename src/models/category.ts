import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

export class CategoryModel extends Model<InferAttributes<CategoryModel>, InferCreationAttributes<CategoryModel>> {

    declare name: string;

    static initModel(instancia: Sequelize) {
        CategoryModel.init({ 
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 50]
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