import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { ClassModule } from 'src/class/class.module';
import { StudentController } from './student.controller';
import { Student, studentsSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoreModule } from 'src/score/score.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: studentsSchema }]),
    forwardRef(() => ClassModule),
    forwardRef(() => ScoreModule),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports : [StudentService] 
})
export class StudentModule {}
