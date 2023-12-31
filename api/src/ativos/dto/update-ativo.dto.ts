import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEnum, Length } from 'class-validator';
import { CreateAtivoDto } from './create-ativo.dto';
import { Status } from '../enums/status.enum';

export class UpdateAtivoDto extends PartialType(CreateAtivoDto) {
  @IsString()
  @Length(1, 100)
  equipamento: string;

  @IsString()
  @Length(10, 100)
  descricao: string;

  @IsString()
  @Length(1, 50)
  marca: string;

  @IsEnum(Status)
  status: Status;
}
