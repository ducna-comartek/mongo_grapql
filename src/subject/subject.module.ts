import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.schema';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { MongooseModule } from '@nestjs/mongoose';
import { subjectSchema } from './subject.schema';
import { ScoreModule } from 'src/score/score.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Subject.name, schema: subjectSchema }]),
    forwardRef(() => ScoreModule),],
    controllers: [SubjectController],
    providers: [SubjectService],
    exports : [SubjectService]
})
export class SubjectModule {}
