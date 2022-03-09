import { IsNumberString, IsString } from 'class-validator'

export class DeleteScoreDto {
    @IsString()
    id: string;
}