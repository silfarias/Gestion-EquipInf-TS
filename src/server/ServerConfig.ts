import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { IServerConfig } from '../ts/interfaces/server.interface';
import { envConfig } from '../config/environments';
import { dbConfig } from '../database/dataBaseConfig';
import { router } from '../routes/index.routes';

export class ServerConfig implements IServerConfig {

    private app: Application
    private port: string | undefined

    constructor() {
        this.app = express();
        this.port = envConfig.port;
        this.middlewares();
        this.routes();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use(router);
    }

    async listen(): Promise<void> {
        try {
            await dbConfig.connectDb();
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        } catch (error) {
            console.error('Error al iniciar el servidor:', error);
        }
    }
}