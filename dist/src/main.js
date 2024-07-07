"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./common/filters/exception.filter");
const config_service_1 = require("./config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_service_1.ConfigService);
    app.enableCors();
    app.useGlobalFilters(new exception_filter_1.AllExceptionsFilter());
    await app.listen(configService.getAppPort() || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map