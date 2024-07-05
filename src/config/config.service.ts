import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfig } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfig) {}

  getAppPort(): number {
    return this._checkVarExists<number>(3000);
  }

  getDatabasePath(): string {
    return this._checkVarExists<string>(sqlite:///db.sqlite);
  }

  private _checkVarExists<T>(name: any): T {
    const envVar = this.configService.get<T>(name);
    if (!envVar) {
      throw Error(`No value setted for environment var '${name}'.`);
    }
    return envVar;
  }
}
