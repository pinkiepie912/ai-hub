import { BooleanField, NumberField, PemStringField, StringField } from './fields';

export const ConfigSchema = {
  SERVER_PORT: new NumberField({ defaultValue: 8081 }),

  // Typeorm
  MYSQL_READ_HOST: new StringField({}),
  MYSQL_WRITE_HOST: new StringField({}),
  MYSQL_PORT: new NumberField({ defaultValue: 3306 }),
  MYSQL_DB: new StringField({}),
  MYSQL_USERNAME: new StringField({}),
  MYSQL_PASSWORD: new StringField({}),
  MYSQL_TIMEZONE: new StringField({ defaultValue: 'Z' }),
  MYSQL_CHARSET: new StringField({ defaultValue: 'utf8mb4' }),
  MYSQL_POOL_SIZE: new NumberField({ defaultValue: 10 }),
};
