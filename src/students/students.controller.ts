import { Controller, Get, Param, HttpStatus, Put, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { UpdateStudentDto } from './dto/update-student.dto';

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

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    const student = await this.studentsService.updateStudent(id, updateStudentDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Student updated successfully',
      data: student,
    };
  }
} 