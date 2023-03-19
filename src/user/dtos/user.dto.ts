import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class SignUpRequest {
  @ApiProperty() @IsString() email: string;
}

export class SignUpResponse {
  @ApiProperty() @IsString() id: string;
  @ApiProperty() @IsString() email: string;
}

export class UserProfileResposne {
  @ApiProperty() @IsString() id: string;
  @ApiProperty() @IsString() email: string;
  @ApiProperty() @IsDate() registeredAt: Date;
}
