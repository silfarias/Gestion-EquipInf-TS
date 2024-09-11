import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { dbConfig } from "../database/dataBaseConfig";

/* tipos diseñados para inferir automáticamente 
los atributos que un modelo tiene al extender Model*/

interface UsuarioModel extends Model<InferAttributes<UsuarioModel>, InferCreationAttributes<UsuarioModel>> {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    rol_id: ForeignKey<number>;
}

const UsuarioModel = dbConfig.sequelize.define<UsuarioModel>('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: true, 
});