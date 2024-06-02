import {
  IsOptional,
  IsString,
  IsEmail,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @IsOptional()
  nome: string;

  @IsString()
  @IsOptional()
  naturalidade: string;

  @IsString()
  @IsOptional()
  estadocivil: string;

  @IsString()
  @IsOptional()
  datadenascimento: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  cpf: string;

  @IsString()
  @IsOptional()
  cep: string;

  // Mexer nisso dq
  @IsString()
  @IsOptional()
  telefone: string;

  @IsString()
  @IsOptional()
  senha: string;

  @IsString()
  @IsOptional()
  confirmsenha: string

  @IsString()
  @IsOptional()
  apelido: string;

  @IsString()
  @IsOptional()
  NomeSocial: string;

  @IsString()
  @IsOptional()
  FiliacaoMae: string;

  @IsString()
  @IsOptional()
  FiliacaoPai: string;

  @IsOptional()
  @IsString()
  genero: string

  @IsOptional()
  @IsString()
  OrientacaoSexual: string

  @IsOptional()
  @IsString()
  Autodeclaracao: string

  @IsOptional()
  @IsString() 
  IdentidadeDeGenero: string

  @IsOptional()
  @IsString() 
  rg: string
  
  @IsOptional()
  @IsString()
  SSP: string

  @IsOptional()
  @IsString()
  UfOrgaoEmissor: string

  @IsOptional()
  @IsString()
  Nacionalidade: string

  @IsOptional()
  @IsString() 
  UFdenaturalidade: string

  @IsOptional()
  @IsString()
  Naturalidade: string

  @IsOptional()
  @IsString()
  Profissao: string

  @IsOptional()
  @IsString()
  Estado: string

  @IsOptional()
  @IsString()
  municipo: string

  @IsOptional()
  @IsString()
  endereco: string

  @IsOptional()
  @IsString()
  bairro: string

  @IsOptional()
  @IsString()
  numero: string

  @IsOptional()
  @IsString()
  logradouro: string

  @IsOptional()
  @IsString()
  complemento: string
}