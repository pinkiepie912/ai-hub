import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { TypeormConfigType } from './config/config.type';
import { RequestLoggerMiddleware } from './middlewares/logger';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeormConfigType => {
        return configService.getTypeOrmConfig({
          logging: [],
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          migrations: [],
          synchronize: false,
        });
      },
    }),
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('');
  }
}
