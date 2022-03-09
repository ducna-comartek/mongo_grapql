import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { ClassController } from './class.controller';
import { Class, classSchema } from './class.schema';
import { ClassService } from './class.service';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: Class.name, schema: classSchema }])
],
  controllers: [ClassController],
  providers: [ClassService],
  exports : [ClassService]
})
export class ClassModule {}
