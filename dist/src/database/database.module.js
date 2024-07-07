"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
const typeorm_config_1 = require("./typeorm.config");
const ENTITIES = require("./entities");
const repositories_1 = require("./repositories");
const user_repository_1 = require("../user/user.repository");
const REPOSITORIES = [
    { provide: user_repository_1.USER_REPOSITORY, useClass: repositories_1.UserRepositoryImp },
];
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_service_1.ConfigService],
                useFactory: typeorm_config_1.getTypeOrmModuleOptions,
            }),
            typeorm_1.TypeOrmModule.forFeature(Object.values(ENTITIES)),
        ],
        providers: [...REPOSITORIES],
        exports: [...REPOSITORIES],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map