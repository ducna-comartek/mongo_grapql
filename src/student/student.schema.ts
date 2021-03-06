import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Class } from "src/class/class.schema";
import { Score } from "src/score/score.schema";

export type StudentDocument = Student & Document


@Schema()
export class Student {
    @Transform(({ value }) => value.toString())
    _id: mongoose.ObjectId;

    @Prop({ required: true })
    name : string

    @Prop({ required: true })
    dob : Date

    @Prop({
        required : true
    })
    gender : string

    @Prop({ required: true })
    email : string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
    class: Class;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }] })
    scores: Score[];
}

export const studentsSchema = SchemaFactory.createForClass(Student);