import { HttpException, HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import { Subject, SubjectDocument } from './subject.schema';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubjectService {
    constructor(
        @InjectModel('Subject')
        private readonly subjectModel: Model<SubjectDocument>
    ) { }

    async findAll(): Promise<Subject[]> {
        return await this.subjectModel.find().exec();
    }

    async findOneById(id): Promise<Subject> {
        return await this.subjectModel.findById(id).exec();
    }

    async create(create: CreateSubjectDto): Promise<Subject> {
        return await new this.subjectModel(create).save();
    }

    async update(update): Promise<Subject> {
        return await this.subjectModel.findByIdAndUpdate(update.id, update).exec();
    }

    async delete(id: string): Promise<Subject> {
        return await this.subjectModel.findByIdAndDelete(id).exec();
    }
}
