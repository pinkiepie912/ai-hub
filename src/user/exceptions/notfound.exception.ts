import { NotFoundException } from '@nestjs/common';

export class UserNotfoundException extends NotFoundException {
  constructor() {
    super('User not found', 'UserNotfoundException');
  }
}
