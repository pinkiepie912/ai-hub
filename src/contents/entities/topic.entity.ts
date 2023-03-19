import { User } from 'src/user/entities/user.entity';
import { getDatetime } from 'src/utils/datetime/datetime';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 64, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'uuid', nullable: false })
  creatorId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  deletedAt: Date | null;

  static of({ title, description, creatorId }: { title: string; description: string; creatorId: string }): Topic {
    const topic = new Topic();
    topic.title = title;
    topic.description = description;
    topic.creatorId = creatorId;
    topic.createdAt = getDatetime().toDate();
    return topic;
  }
}
