import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClassDto } from './dto_class/create-class.dto';
import { DeleteClassDto } from './dto_class/delete-class.dto';
import { UpdateClassDto } from './dto_class/update-class.dto';
import { FindStudentInfoByNameDto } from './dto_class/find-student-byname.dto';
import { FindClassByNameDto } from './dto_class/find-class-byname.dto';
import { Class, ClassDocument } from './class.schema';
import {Model} from 'mongoose';
import { Score } from 'src/score/score.schema';
import { InjectModel } from '@nestjs/mongoose';
// import { FindClassByName, FindClassByNameDto } from './dto_class/find-class-byname.dto';
// import { FindStudentInfoByNameDto } from 'src/class/dto_class/find-student-byname.dto';

@Injectable()
export class ClassService {
    public score: Score
    constructor(
        @InjectModel('Class')
        private readonly classModel: Model<ClassDocument>
    ){}
    
    async createNewClass(createClassDto : CreateClassDto) {
        return await new this.classModel(createClassDto).save();
    }

    async findClass() : Promise<Class[]>{
        return await this.classModel.find().exec();
    }

    async updateClass( update: UpdateClassDto) {
        return await this.classModel.findByIdAndUpdate(update.id, update).populate('students').exec();
    }

    async deleteClass(param : string) {
        return await this.classModel.findByIdAndDelete(param).exec();
    } 

    async findClassById(id : string){
        return await this.classModel.findById(id).populate('students').exec();
    }

}
