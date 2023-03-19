import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostWriter {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {}

  async create({ title, body, topicId, creatorId }: { title: string; body: string; topicId: string; creatorId: string }) {
    return await this.postRepository.save(Post.of({ title, body, topicId, creatorId }));
  }
}
