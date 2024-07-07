import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from 'src/config/config.service';
export declare const getTypeOrmModuleOptions: (config: ConfigService) => TypeOrmModuleOptions;
