import { Injectable } from "@nestjs/common";
import { Class } from "src/class/class.schema";
// import { v4 as uuidv4 } from 'uuid';
import { Model, Connection } from 'mongoose';
import { UpdateStudentDto } from "./dto/update-Student.dto";
import { Student, StudentDocument} from "./student.schema";
import { CreateStudentDto } from "./dto/create-student.dto";
import { DeleteStudentDto } from "./dto/delete-student.dto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class StudentService {
    constructor(
        @InjectModel('Student')
        private readonly studentModel: Model<StudentDocument>
        ) {}

    async getStudentById(StudentId : string){
        return this.studentModel.findById(StudentId)
    }

    async getStudent(): Promise<Student[]> {
        return this.studentModel.find()
    }

    async create(create: CreateStudentDto): Promise<Student> {
        return await new this.studentModel(create).save()
    }

    async updateStudent(student) {
        return await this.studentModel.findByIdAndUpdate(student.id, student)
    }

    async delete(id: string): Promise<Student> {
        return await this.studentModel.findByIdAndDelete(id).exec();
    }

}