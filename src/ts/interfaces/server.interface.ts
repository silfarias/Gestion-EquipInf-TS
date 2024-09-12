export interface IServerConfig {
    middlewares(): void;
    routes(): void;
    listen(): Promise<void>;
}