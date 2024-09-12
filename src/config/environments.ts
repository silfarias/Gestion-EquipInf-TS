import 'dotenv/config'

class EnvConfig {

    port: string
    secretKey: string

    constructor () {
        this.port = process.env.PORT || '3000';
        this.secretKey = process.env.SECRET_KEY || 'ññññññññ';
    }

    getEnvDataBase() {
        return {
            dbName: process.env.DB_NAME || 'gestionInf',
            dbUser: process.env.DB_USER || 'postgres',
            dbPassword: process.env.DB_PASSWORD || '',
            dbHost: process.env.DB_HOST || 'localhost',
            dbDialect: process.env.DB_DIALECT || 'postgres',
            dbPort: process.env.DB_PORT || '5432'
        }
    }
}

export const envConfig = new EnvConfig()