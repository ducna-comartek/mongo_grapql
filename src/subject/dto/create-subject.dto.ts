import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSubjectDto {
    @IsString()
    readonly name: string;

    @IsEnum({
        ONLINE: 'Online',
        OFFLINE: 'Offline'
    })
    @IsOptional()
    readonly type: 'Online' | 'Offline'
}