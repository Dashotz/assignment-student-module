import { Controller, Get, Param, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async getAllStudents() {
    const students = await this.studentsService.getAllStudents();
    return {
      statusCode: HttpStatus.OK,
      data: students,
    };
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number) {
    const student = await this.studentsService.getStudentById(id);
    return {
      statusCode: HttpStatus.OK,
      data: student,
    };
  }
} 