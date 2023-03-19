import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserNotfoundException } from '../exceptions/notfound.exception';

@Injectable()
export class UserReader {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async get(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new UserNotfoundException();
    return user;
  }

  async getBy(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UserNotfoundException();
    return user;
  }
}
