import { Sequelize } from "sequelize";
import { UserModel } from "./user";
import { RolModel } from "./rols";
import { CategoryModel } from "./category";
import { EquipmentModel } from "./equipment";
import { ClientsModel } from "./clients";
import { PurchaseDetailsModel } from "./purchase_details";
import { InventoryModel } from "./inventory";

type ModelWithInit = { initModel: (instancia: Sequelize) => void }

export function defineRelations(sequelize: Sequelize) {

    // inicializamos modelos
    let models: ModelWithInit[] = [
        RolModel, 
        UserModel, 
        CategoryModel, 
        EquipmentModel,                     
        ClientsModel,
        PurchaseDetailsModel,
        InventoryModel
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

    // equipamiento e inventario
    EquipmentModel.hasMany(InventoryModel, {
        foreignKey: 'equipment_id'
    });
    InventoryModel.belongsTo(EquipmentModel, {
        foreignKey: 'equipment_id'
    });
    
    // cliente y facturas
    ClientsModel.hasMany(PurchaseDetailsModel, {
        foreignKey: 'client_id'
    });
    PurchaseDetailsModel.belongsTo(ClientsModel, {
        foreignKey: 'client_id'
    });

    // facturas y equipamiento
    EquipmentModel.hasMany(PurchaseDetailsModel, {
        foreignKey: 'equipment_id'
    });
    PurchaseDetailsModel.belongsTo(EquipmentModel, {
        foreignKey: 'equipment_id'
    });
}