import { Injectable } from '@nestjs/common';
import { loadFromEnv } from './config.loader';
import { ConfigSchema } from './config.schema';
import { ConfigType, LoggingOptions, TypeormConfigType } from './config.type';

@Injectable()
export class ConfigService {
  constructor(private config: ConfigType) {}

  getConfig(): ConfigType {
    return this.config;
  }

  getTypeOrmConfig({
    logging = [],
    entities = [],
    migrations = [],
    synchronize = false,
  }: {
    logging: LoggingOptions;
    entities: Array<string>;
    migrations: Array<string>;
    synchronize: boolean;
  }): TypeormConfigType {
    const {
      MYSQL_DB: database,
      MYSQL_PORT: port,
      MYSQL_USERNAME: username,
      MYSQL_PASSWORD: password,
      MYSQL_TIMEZONE: timezone,
      MYSQL_POOL_SIZE: connectionLimit,
      MYSQL_CHARSET: charset,
      MYSQL_READ_HOST,
      MYSQL_WRITE_HOST,
    } = this.config;

    const replication = {
      master: { host: MYSQL_WRITE_HOST, port, username, password, database },
      slaves: [{ host: MYSQL_READ_HOST, port, username, password, database }],
    };

    return {
      type: 'mysql',
      replication,
      timezone,
      charset,
      synchronize,
      logging,
      entities,
      migrations,
      extra: { connectionLimit },
    };
  }

  static LoadFromEnv(): ConfigService {
    const config = loadFromEnv<ConfigType>('', ConfigSchema);
    return new ConfigService(config);
  }
}
