import {
  IsNotEmpty,
  IsString,
  IsEmail,
  isString,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  naturalidade: string;

  @IsString()
  @IsNotEmpty()
  estadocivil: string;

  @IsString()
  @IsNotEmpty()
  datadenascimento: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  // Mexer nisso dq
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  confirmsenha: string


}
