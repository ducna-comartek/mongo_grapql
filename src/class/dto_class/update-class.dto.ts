import { IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Student } from 'src/student/student.schema';

export class UpdateClassDto {
    @IsString()
    readonly id : string

    @IsString()
    @IsOptional()
    @MinLength(1)
    @MaxLength(50)
    readonly name?: string;

    @IsNumber()
    @IsOptional()
    @Min(20)
    @Max(50)
    readonly totalMember?: number;

    @IsString()
    @IsOptional()
    @MinLength(10)
    @MaxLength(100)
    readonly teacherName?: string;

    @IsOptional()
    readonly students?: Student[];
}

