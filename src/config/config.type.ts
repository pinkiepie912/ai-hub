export type ConfigType = {
  SERVER_PORT: number;

  // Typeorm
  MYSQL_READ_HOST: string;
  MYSQL_WRITE_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USERNAME: string;
  MYSQL_PASSWORD: string;
  MYSQL_DB: string;
  MYSQL_TIMEZONE: string;
  MYSQL_CHARSET: string;
  MYSQL_POOL_SIZE: number;
};

// Typeorm
export type TypeormConfigType = {
  type: 'mysql';
  replication: {
    master: Node;
    slaves: Array<Node>;
  };
  timezone: string;
  charset: string;
  extra: { connectionLimit: number };
  cache?: TypeormCacheType | TypeormClusterCacheType;
  entities: Array<string>;
  migrations: Array<string>;
  synchronize: boolean;
  logging: LoggingOptions;
};

export type LoggingOptions = boolean | 'all' | ('query' | 'schema' | 'error' | 'warn' | 'info' | 'log' | 'migration')[];

type Node = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

type TypeormCacheType = {
  type: 'ioredis';
  options: {
    host: string;
    prot: number;
  };
};

type TypeormClusterCacheType = {
  type: 'ioredis/cluster';
  options: Array<{ host: string; prot: number }>;
};
