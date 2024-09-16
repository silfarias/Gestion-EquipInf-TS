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
        });
        CategoryModel.afterSync(async () => {
            const count = await CategoryModel.count();
            if (count === 0) {
                const categorias = [
                    { name: 'portatiles/laptops' },
                    { name: 'monitores' },
                    { name: 'impresoras'},
                    { name: 'celulares'},
                    { name: 'tabletas'},
                    { name: 'teclado/raton'},
                    { name: 'accesorios-inf'},
                    { name: 'proyectores'},
                    { name: 'almacenamiento-ext'},
                    { name: 'pc'}
                ];
                await CategoryModel.bulkCreate(categorias, {
                    ignoreDuplicates: true
                });
            }
        });
    }
}