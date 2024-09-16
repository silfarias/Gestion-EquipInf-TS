import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { IServerConfig } from '../interfaces/server.interface';
import { envConfig } from '../config/environments';
import { dbConfig } from '../database/dataBaseConfig';
import { router } from '../routes/index.routes';
import bodyParser from 'body-parser';

export class ServerConfig implements IServerConfig {

    private app: Application
    private port: string | undefined

    constructor() {
        this.app = express();
        this.port = envConfig.port;
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes(): void {
        this.app.use('/', router);
    }

    public async listen(): Promise<void> {
        try {
            await dbConfig.connectDb();
            this.app.listen(this.port, () => {
                console.log(`Servidor corriendo en http://localhost:${this.port}`);
            });
        } catch (error) {
            console.error('Error al iniciar el servidor:', error);
        }
    }
}