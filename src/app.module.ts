import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { ScoreModule } from './score/score.module';
import { SubjectModule } from './subject/subject.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://anhduc1999:anhduc123@cluster0.9tm3v.mongodb.net/manager_student?retryWrites=true&w=majority'),
    StudentModule,
    ScoreModule,
    ClassModule,
    SubjectModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
