import { DataSource } from 'typeorm';
import { CourseRefactoringTest1691443166263 } from './migrations/1691443166263-CourseRefactoringTest';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
