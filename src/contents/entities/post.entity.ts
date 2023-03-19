import { User } from 'src/user/entities/user.entity';
import { getDatetime } from 'src/utils/datetime/datetime';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from './topic.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  title: string;

  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'uuid', nullable: false })
  topicId: string;

  @ManyToOne(() => Topic)
  @JoinColumn({ name: 'topicId' })
  topic: Topic;

  @Column({ type: 'uuid', nullable: false })
  creatorId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  deletedAt: Date | null;

  static of({ title, body, topicId, creatorId }: { title: string; body: string; topicId: string; creatorId: string }): Post {
    const post = new Post();
    post.title = title;
    post.body = body;
    post.topicId = topicId;
    post.creatorId = creatorId;
    post.createdAt = getDatetime().toDate();
    return post;
  }
}
