import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from '../entities/topic.entity';

@Injectable()
export class TopicWriter {
  constructor(@InjectRepository(Topic) private topicRepository: Repository<Topic>) {}

  async create({ title, description, creatorId }: { title: string; description: string; creatorId: string }): Promise<Topic> {
    return await this.topicRepository.save(Topic.of({ title, description, creatorId }));
  }
}
