import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserWriter {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async signUp({ email }: { email: string }): Promise<User> {
    const user = User.of({ email });
    return await this.userRepository.save(user);
  }
}
