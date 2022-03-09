import { Body, Controller, Delete, Get, Header, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { DeleteSubjectDto } from 'src/Subject/dto/delete-Subject.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(
        private subjectService : SubjectService
    ){}
    @Get()
    async index() {
        return await this.subjectService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.subjectService.findOneById(id);
    }

    @Post()
    async create(@Body() create: CreateSubjectDto) {
        return await this.subjectService.create(create);
    }

    @Patch(':id')
    async update(@Body() update: UpdateSubjectDto) {
        return await this.subjectService.update(update);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const subject = await this.subjectService.findOneById(id);
        if (subject.scores.length) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `Bad Request: Subject has scores!`,
            }, HttpStatus.BAD_REQUEST);
        }
        return await this.subjectService.delete(id);
    }
}
