import { IEnvConfig } from "../ts/interfaces/env.interface"
import 'dotenv/config'

export class EnvConfig implements IEnvConfig {

    port: string;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbHost: string;
    dbDialect: string;
    dbPort: string;
    secretKey?: string;

    constructor () {
        this.port = process.env.PORT ?? '4000',
        this.dbName = process.env.DB_NAME ?? 'gestioninf',
        this.dbUser = process.env.DB_USER ?? 'postgres', 
        this.dbPassword = process.env.DB_PASSWORD ?? 's140320fa',
        this.dbHost = process.env.DB_HOST ?? 'localhost',
        this.dbDialect = process.env.DB_DIALECT ?? 'postgres',
        this.dbPort = process.env.DB_PORT ?? '5432',
        this.secretKey = process.env.SECRET_KEY ?? 'ññññññ'
    }

    getPort() {
        return this.port
    }

    getConfigDataBase() {
        return {
            name: this.dbName,
            user: this.dbUser,
            password: this.dbPassword,
            host: this.dbHost,
            dialect: this.dbDialect,
            port: parseInt(this.dbPort)
        }
    }
}

const envConfig = new EnvConfig()
export { envConfig }