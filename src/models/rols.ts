import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

export class RolModel extends Model<InferAttributes<RolModel>, InferCreationAttributes<RolModel>>  {

    declare name: string; // al utilizar declare garantizamos que TS no omitirá el campo

    static initModel(instancia: Sequelize) { // static para que la clase sea accesible sin necesidad de crear una instancia
        RolModel.init({ // inicializamos el modelo y lo asociamos con una tabla en la base de datos
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 50]
                }
            }
        }, {
            sequelize: instancia,
            modelName: 'RolModel',
            tableName: 'roles',
            timestamps: false
        });
        RolModel.afterSync(async () => {
            const count = await RolModel.count();
            if (count === 0) {
                const roles = [
                    { name: 'admin' },
                    { name: 'employee' }
                ];
                await RolModel.bulkCreate(roles, {
                    ignoreDuplicates: true
                });
            }
        });
    }
}