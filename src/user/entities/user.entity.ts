import { getDatetime } from 'src/utils/datetime/datetime';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 64, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 32 })
  name: string;

  @Column({ type: 'timestamp', nullable: false })
  registeredAt: Date;

  static of({ email }: { email: string }): User {
    const user = new User();
    user.email = email;
    user.registeredAt = getDatetime().toDate();
    return user;
  }
}
