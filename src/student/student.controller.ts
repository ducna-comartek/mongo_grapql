import { Body, Controller, Delete, Get, Header, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { ClassService } from 'src/class/class.service';

@Controller('student')
export class StudentController {
    constructor(
        private studentService : StudentService,
        private classService : ClassService
    ){}

    @Post()
    async addStudent(@Body() createStudent : CreateStudentDto){
        const _class = await this.classService.findClassById(createStudent.class)
        if(!_class){
            throw new HttpException('Cannot found Class',HttpStatus.BAD_REQUEST)
        }
        return this.studentService.create(createStudent)
    }

    @Get('getbyid')
    async getStudentById(@Query() id : string){
        return this.studentService.getStudentById(id)
    }

    @Get()
    async getAll(){
        return this.studentService.getStudent()
    }


    @Patch(':id')
    async update(@Param('id') id) {
        return await this.studentService.updateStudent(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.studentService.delete(id);;
    }

    
}
