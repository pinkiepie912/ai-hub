import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class PostResponse {
  @ApiProperty() @IsString() id: number;
  @ApiProperty() @IsString() topicId: string;
  @ApiProperty() @IsString() creatorId: string;
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() body: string;
  @ApiProperty() @IsDate() createdAt: Date;
  @ApiProperty() @IsDate() deletedAt: Date | null;
}
