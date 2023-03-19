import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from '../entities/topic.entity';
import { TopicNotFoundException } from '../exceptions/notfound.exception';

@Injectable()
export class TopicReader {
  constructor(@InjectRepository(Topic) private topicRepository: Repository<Topic>) {}

  async get(topicId: string): Promise<Topic> {
    const topic = await this.topicRepository.findOne({ where: { id: topicId } });
    if (!topic) throw new TopicNotFoundException(topicId);
    return topic;
  }
}
