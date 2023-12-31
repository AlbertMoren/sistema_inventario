import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { Permissao } from '../enums/permissao.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  telefone: string;

  @IsEmail()
  email: string;

  @IsEnum(Permissao)
  permissao: Permissao;

  @IsNotEmpty()
  senha: string;
}
