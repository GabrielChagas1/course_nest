  Column,
  Entity,
  JoinTable,
  ManyToMany,

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  tags: string[];
}
