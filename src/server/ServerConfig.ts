import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { IServerConfig } from '../ts/interfaces/server.interface';
import { envConfig } from '../config/environments';
import { dbConfig } from '../database/dataBaseConfig';
// import 'dotenv/config';


export class ServerConfig implements IServerConfig {

    private app: Application
    private port: string | undefined

    constructor() {
        this.app = express();
        this.port = envConfig.getPort();
        this.middlewares();
        this.router();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    router(): void {
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        })
    }

    listen(): void {
        this.app.listen(this.port, () => {
            dbConfig.connectDb();
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }  
}