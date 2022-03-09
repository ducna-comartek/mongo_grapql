import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Score } from "src/score/score.schema";

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
    @Transform(({ value }) => value.toString())
    _id: mongoose.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }] })
    scores: Score[];
}

export const subjectSchema = SchemaFactory.createForClass(Subject);