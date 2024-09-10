import { IDataBaseConfig } from '../ts/interfaces/db.interface'
import { Sequelize } from 'sequelize';
import { envConfig } from '../config/environments';

export class DbConfig implements IDataBaseConfig {
    private sequelize: Sequelize;
    constructor () {
        const dbConfig = envConfig.getConfigDataBase()
        this.sequelize = new Sequelize(
            dbConfig.name,
            dbConfig.user,
            dbConfig.password, 
            {
                host: dbConfig.host,
                dialect: dbConfig.dialect as any, // lo convertimos a un tipo aceptado por Sequelize
                port: dbConfig.port,
            }
        )
    }
    async connectDb() {
        try {
            await this.sequelize.authenticate()
            console.log(`Se he establecido la conexión a la base de datos`);
        } catch (error) {
            console.log('No se ha podido conectar a la base de datos', error);
        }
    }
}

const dbConfig = new DbConfig();
export { dbConfig }