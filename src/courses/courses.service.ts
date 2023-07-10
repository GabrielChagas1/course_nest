import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

