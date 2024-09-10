export interface IServerConfig {
    middlewares(): void;
    router(): void;
    listen(): void;
}