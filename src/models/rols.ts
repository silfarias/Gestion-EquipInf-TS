import { Model, DataTypes, Sequelize } from "sequelize";

export class RolModel extends Model {

    declare id: number; // al utilizar declare garantizamos que TS no omitirá el campo
    declare name: string;
    declare description: string;

    static initModel(instancia: Sequelize) {
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
