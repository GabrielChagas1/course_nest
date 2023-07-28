import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';
@Entity('tags')
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];
