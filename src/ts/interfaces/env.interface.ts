export interface IEnvConfig {
    port: string;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbHost: string;
    dbDialect: string;
    dbPort: string;
    secretKey?: string;
}