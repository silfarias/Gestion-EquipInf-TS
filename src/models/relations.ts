import { Model, Sequelize } from "sequelize";
import { UserModel } from "./user";
import { RolModel } from "./rols";
import { CategoryModel } from "./category";
import { LocationModel } from "./location";
import { EquipmentModel } from "./equipment";
import { ClientsModel } from "./clients";
import { PurchaseDetailsModel } from "./purchase_details";

type ModelWithInit = { initModel: (instancia: Sequelize) => void }

export function defineRelations(sequelize: Sequelize) {

    // inicializamos modelos
    let models: ModelWithInit[] = [
        UserModel, 
        RolModel, 
        CategoryModel, 
        LocationModel, 
        EquipmentModel,                     
        ClientsModel,
        PurchaseDetailsModel
    ];
    models.forEach((model) => model.initModel(sequelize));

    // definimos relaciones

    // rol y usuario
    RolModel.hasMany(UserModel, {
        foreignKey: 'rol_id',
    });
    UserModel.belongsTo(RolModel, {
        foreignKey: 'rol_id',
    });

    // categoria y equipamiento
    CategoryModel.hasMany(EquipmentModel, {
        foreignKey: 'category_id',
    });
    EquipmentModel.belongsTo(CategoryModel, {
        foreignKey: 'category_id',
    });

    // usuario y equipamiento
    UserModel.hasMany(EquipmentModel, {
        foreignKey: 'user_id',
    });
    EquipmentModel.belongsTo(UserModel, {
        foreignKey: 'user_id',
    });

    // ubicacion y equipamiento
    LocationModel.hasMany(EquipmentModel, {
        foreignKey: 'location_id',
    });
    EquipmentModel.belongsTo(LocationModel, {
        foreignKey: 'location_id',
    });

    // clientes y ubicacion
    LocationModel.hasOne(ClientsModel, {
        foreignKey: 'id_location'
    })
    ClientsModel.belongsTo(LocationModel, {
        foreignKey: 'id_location'
    });

    // cliente y facturas
    ClientsModel.hasMany(PurchaseDetailsModel, {
        foreignKey: 'id_client'
    });
    PurchaseDetailsModel.belongsTo(ClientsModel, {
        foreignKey: 'id_client'
    });

    // facturas y equipamiento
    EquipmentModel.hasMany(PurchaseDetailsModel, {
        foreignKey: 'id_equipment'
    });
    PurchaseDetailsModel.belongsTo(EquipmentModel, {
        foreignKey: 'id_equipment'
    });
}