import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [{ provide: ConfigService, useFactory: () => ConfigService.LoadFromEnv() }],
  exports: [ConfigService],
})
export class ConfigModule {}
