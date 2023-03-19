import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { SignUpRequest, SignUpResponse, UserProfileResposne } from '../dtos/user.dto';
import { UserNotfoundException } from '../exceptions/notfound.exception';
import { UserReader } from '../services/user.reader.service';
import { UserWriter } from '../services/user.writer.service';

@Controller('users')
export class UserController {
  constructor(private userReader: UserReader, private userWriter: UserWriter) {}

  @Post()
  @ApiOperation({ summary: 'Register' })
  @ApiCreatedResponse({ type: SignUpResponse })
  async signUp(@Body() req: SignUpRequest): Promise<SignUpResponse> {
    const { email } = req;
    const user = await this.userWriter.signUp({ email });

    return { id: user.id, email: user.email };
  }

  @Get(':uid')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiException(() => [UserNotfoundException])
  @ApiCreatedResponse({ type: UserProfileResposne })
  async get(@Param('uid') uid: string): Promise<UserProfileResposne> {
    const user = await this.userReader.get(uid);
    return { id: user.id, email: user.email, registeredAt: user.registeredAt };
  }
}
