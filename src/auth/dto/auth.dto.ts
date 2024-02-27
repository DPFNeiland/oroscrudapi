/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  // Mexer nisso dq
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
