export interface IServerConfig {
    middlewares(): void;
    router(): void;
    listen(): Promise<void>;
}