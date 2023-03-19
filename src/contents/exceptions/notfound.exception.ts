import { NotFoundException } from '@nestjs/common';

export class TopicNotFoundException extends NotFoundException {
  constructor(topicId: string) {
    super(`Topic with id ${topicId} not found`, 'TopicNotFoundException');
  }
}

export class CategoryNotFoundException extends NotFoundException {
  constructor(categoryId: string) {
    super(`Category with id ${categoryId} not found`, 'CategoryNotFoundException');
  }
}

export class PostNotFoundException extends NotFoundException {
  constructor(postId: string) {
    super(`Post with id ${postId} not found`, 'PostNotFoundException');
  }
}
