import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserReader } from './services/user.reader.service';
import { UserWriter } from './services/user.writer.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserReader, UserWriter],
  exports: [UserReader, UserWriter],
  controllers: [UserController],
})
export class UserModule {}
