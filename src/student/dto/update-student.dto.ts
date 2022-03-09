import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, IsDate, IsEmail, IsOptional } from 'class-validator';
import { Score } from 'src/score/score.schema';


export class UpdateStudentDto{
    @IsString()
    readonly id?: string

    @IsString()
    @IsOptional()
    readonly name?: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    readonly dob?: Date;

    @IsEnum({
        MALE: 'Male',
        FEMALE: 'Female',
        OTHER: 'Other',
    })
    @IsOptional()
    readonly gender?: string;

    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsOptional()
    readonly class?: string;

    @IsOptional()
    readonly scores?: Score[]
}