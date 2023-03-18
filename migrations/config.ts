import { DataSource } from 'typeorm';

if (process.env.ENV === 'local') {
  require('dotenv').config({ path: '.env.migration' });
} else {
  const smValues = JSON.parse(process.env.SM_VALUES || '{}');
  const envs = JSON.parse(smValues.SecretString || '{}');

  for (const [key, value] of Object.entries(envs)) {
    process.env[key] = String(value);
  }
}

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_WRITE_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  timezone: process.env.MYSQL_TIMEZONE || 'Z',
  charset: process.env.MYSQL_CHARACTER_SET || 'utf8mb4',
  entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/*Migration{.ts,.js}'],
  logging: true,
});

export default dataSource;
