import { Type } from "class-transformer";
import { IsDate, IsEmail, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateStudentDto{
    @IsString()
    readonly name: string;

    @Type(() => Date)
    @IsDate()
    readonly dob: Date;

    @IsEnum({
        MALE: 'Male',
        FEMALE: 'Female',
        OTHER: 'Other',
    })
    readonly gender: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly class: string;
}