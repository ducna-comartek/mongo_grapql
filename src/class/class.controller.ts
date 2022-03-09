import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DeleteStudentDto } from 'src/student/dto/delete-student.dto';
import { FindStudentInfoByNameDto } from 'src/class/dto_class/find-student-byname.dto';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto_class/create-class.dto';
import { UpdateClassDto } from './dto_class/update-class.dto';
import { FindClassByNameDto } from './dto_class/find-class-byname.dto';
// import { FindClassByName, FindClassByNameDto } from './dto_class/find-class-byname.dto';

@Controller('class')
export class ClassController {
    constructor (
        private classService : ClassService
    ){}

    @Post()
    async createClass(@Body() createClassDto : CreateClassDto){
        return this.classService.createNewClass(createClassDto)
    }

    @Get()
    async getAll(){
        return this.classService.findClass()
    }

    @Get()
    async findClassById(id : string){
        return this.classService.findClassById(id)
    }

    @Patch()
    async updateClass(@Body() updateClass : UpdateClassDto){
        console.log(updateClass)
        return this.classService.updateClass(updateClass)
    }

    @Delete(':id')
    async deleteClass(@Param() param : string){
        return this.classService.deleteClass(param)
    }


}
