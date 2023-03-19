import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTopicRequest {
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() description: string;
}

export class TopicResponse {
  @ApiProperty() @IsString() id: string;
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() description: string;
}
