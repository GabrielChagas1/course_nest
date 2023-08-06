import { DataSource } from 'typeorm';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

export const coursesProviders = [
    provide: 'COURSES_REPOSITORY',
