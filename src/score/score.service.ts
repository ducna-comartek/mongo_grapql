import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from './score.schema';
import { Model } from 'mongoose';
import { CreateScoreDto} from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { Student } from 'src/student/student.schema';
import { Subject } from 'src/subject/subject.schema';
import { StudentService } from 'src/student/student.service';
import { SubjectService } from 'src/subject/subject.service';

@Injectable()
export class ScoresService {
    constructor(
        @InjectModel('Score')
        private readonly scoreModel: Model<ScoreDocument>,
        private readonly studentsService: StudentService,
        private readonly subjectsService: SubjectService,
    ) { }

    async findAll(): Promise<Score[]> {
        return await this.scoreModel.find().exec();
    }

    async findOneById(id: string): Promise<Score> {
        return await this.scoreModel.findById(id).populate('student').populate('subject').exec();
    }

    async findOneByStudentAndSubject(student: Student, subject: Subject): Promise<Score> {
        return await this.scoreModel.findOne({ student: student, subject: subject }).exec();
    }

    async create(create: CreateScoreDto) {
        const result = await new this.scoreModel(create).save();
        const student = await this.studentsService.getStudentById(create.student);
        const subject = await this.subjectsService.findOneById(create.subject);
        await this.studentsService.updateStudent({id : create.student, scores: [...student.scores, result] });
        await this.subjectsService.update({id :create.subject, scores: [...subject.scores, result] });
        return result;
    }

    async update(id: string, update: UpdateScoreDto): Promise<Score> {
        return await this.scoreModel.findByIdAndUpdate(id, update).exec();
    }

    async delete(id: string): Promise<Score> {
        return await this.scoreModel.findByIdAndDelete(id).exec();
    }
}