import { ConfigService as NestConfig } from '@nestjs/config';
export declare class ConfigService {
    private readonly configService;
    constructor(configService: NestConfig);
    getAppPort(): number;
    getDatabasePath(): string;
    private _checkVarExists;
}
