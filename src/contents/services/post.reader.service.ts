import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostReader {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {}

  async get(postId: string): Promise<Post> {
    return await this.postRepository.findOne({ where: { id: postId } });
  }
}
