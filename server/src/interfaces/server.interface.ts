export interface IServerConfig {
    listen(): Promise<void>;
}