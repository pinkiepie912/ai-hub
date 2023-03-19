import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 32 })
  name: string;

  static of({ name }: { name: string }): Category {
    const category = new Category();
    category.name = name;
    return category;
  }
}
