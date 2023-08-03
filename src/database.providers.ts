import { DataSource } from 'typeorm';
import { CourseRefactoringTest1691443166263 } from './migrations/1691443166263-CourseRefactoringTest';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
