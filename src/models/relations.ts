import { Sequelize } from "sequelize";
import { UserModel } from "./user";
import { RolModel } from "./rols";
import { CategoryModel } from "./category";
import { LocationModel } from "./location";
import { EquipmentModel } from "./equipment";

export function defineRelations(sequelize: Sequelize) {
    // inicializamos modelos
    UserModel.initModel(sequelize);
    RolModel.initModel(sequelize);
    CategoryModel.initModel(sequelize);
    LocationModel.initModel(sequelize);
    EquipmentModel.initModel(sequelize);

    // definimos relaciones
    RolModel.hasMany(UserModel, {
        foreignKey: 'rol_id',
    });
    UserModel.belongsTo(RolModel, {
        foreignKey: 'rol_id',
    });

    CategoryModel.hasMany(EquipmentModel, {
        foreignKey: 'category_id',
    });
    EquipmentModel.belongsTo(CategoryModel, {
        foreignKey: 'category_id',
    });

    LocationModel.hasMany(EquipmentModel, {
        foreignKey: 'location_id',
    });
    EquipmentModel.belongsTo(LocationModel, {
        foreignKey: 'location_id',
    });
}