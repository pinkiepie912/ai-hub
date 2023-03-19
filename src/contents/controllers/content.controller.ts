import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreateTopicRequest, TopicResponse } from '../dtos/topic.dto';
import { TopicNotFoundException } from '../exceptions/notfound.exception';
import { PostReader } from '../services/post.reader.service';
import { PostWriter } from '../services/post.writer.service';
import { TopicReader } from '../services/topic.reader.service';
import { TopicWriter } from '../services/topic.writer.service';

@Controller('t')
export class ContentsController {
  constructor(
    private topicWriter: TopicWriter,
    private topicReader: TopicReader,
    private postReader: PostReader,
    private postWriter: PostWriter
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create topic' })
  @ApiCreatedResponse({ type: TopicResponse })
  async createTopic(@Body() req: CreateTopicRequest): Promise<TopicResponse> {
    const uid = '';
    const { title, description } = req;
    const topic = await this.topicWriter.create({ title, description, creatorId: uid });

    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
    };
  }

  @Get(':topicId')
  @ApiOperation({ summary: 'Get topic by id' })
  @ApiException(() => [TopicNotFoundException])
  @ApiCreatedResponse({ type: TopicResponse })
  async getTopic(@Param('topicId') topicId: string): Promise<TopicResponse> {
    const topic = await this.topicReader.get(topicId);
    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
    };
  }

  @Get(':topicId/postId')
  @ApiOperation({ summary: 'Get topic by id' })
  @ApiException(() => [TopicNotFoundException])
  @ApiCreatedResponse({ type: TopicResponse })
  async getPost(@Param('topicId') topicId: string, @Param('postId') postId: string): Promise<TopicResponse> {
    const topic = await this.topicReader.get(topicId);
    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
    };
  }
}
