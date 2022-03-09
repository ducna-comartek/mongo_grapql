import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from 'src/student/student.module';
import { SubjectModule } from 'src/subject/subject.module';
import { ScoreController } from './score.controller';
import { Score, scoreSchema } from './score.schema';
import { ScoresService } from './score.service';
import { ClassModule } from 'src/class/class.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Score.name, schema: scoreSchema }]),
    forwardRef(() => StudentModule),
    forwardRef(() => SubjectModule),
],
  controllers: [ScoreController],
  providers: [ScoresService],
  exports : [ScoresService]
})
export class ScoreModule {}
