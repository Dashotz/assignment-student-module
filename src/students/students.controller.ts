import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    const student = await this.studentsService.createStudent(createStudentDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Student created successfully',
      data: student,
    };
  }

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

  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    await this.studentsService.deleteStudent(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Student deleted successfully',
    };
  }
} 