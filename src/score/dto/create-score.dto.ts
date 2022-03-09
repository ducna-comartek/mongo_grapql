import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateScoreDto {
    @IsNumber()
    @Min(0)
    @Max(10)
    readonly score: number;

    @IsString()
    readonly student: string;

    @IsString()
    readonly subject: string;
}