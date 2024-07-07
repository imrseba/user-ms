"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmModuleOptions = void 0;
const getTypeOrmModuleOptions = (config) => ({
    type: 'sqlite',
    database: config.getDatabasePath(),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
});
exports.getTypeOrmModuleOptions = getTypeOrmModuleOptions;
//# sourceMappingURL=typeorm.config.js.map