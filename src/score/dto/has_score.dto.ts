import { IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';


export class HasScoreDto {
    @Expose({ name: 'studentId' })
    @IsNumber()
    readonly student: string;

    @Expose({ name: 'subjectId' })
    @IsNumber()
    readonly subject: string;
}
