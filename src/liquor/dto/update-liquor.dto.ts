import { PartialType } from '@nestjs/mapped-types';
import { CreateLiquorDto } from './create-liquor.dto';
import { IsPositive, IsNumber } from 'class-validator';

export class UpdateLiquorDto extends PartialType(CreateLiquorDto) {
@IsNumber()
@IsPositive()
id :number

}
