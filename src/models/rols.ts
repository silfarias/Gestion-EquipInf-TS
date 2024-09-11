import { Model, DataTypes, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

export class RolModel extends Model<InferAttributes<RolModel>, InferCreationAttributes<RolModel>>  {

    declare name: string; // al utilizar declare garantizamos que TS no omitirá el campo
    declare description: string;

    static initModel(instancia: Sequelize) { // static para que la clase sea accesible sin necesidad de crear una instancia
        RolModel.init({ // inicializamos el modelo y lo asociamos con una tabla en la base de datos
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 50]
                }
            }, 
            description: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize: instancia,
            modelName: 'RolModel',
            tableName: 'roles',
            timestamps: false
        })
    }
}