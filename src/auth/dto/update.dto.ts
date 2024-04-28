import {
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';

export class UpdateUserDto {
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

  @IsString()
  @IsNotEmpty()
  apelido: string;

  @IsString()
  @IsNotEmpty()
  NomeSocial: string;

  @IsString()
  @IsNotEmpty()
  FiliacaoMae: string;

  @IsString()
  @IsNotEmpty()
  FiliacaoPai: string;

  @IsNotEmpty()
  @IsString()
  genero: string

  @IsNotEmpty()
  @IsString()
  OrientacaoSexual: string

  @IsNotEmpty()
  @IsString()
  Autodeclaracao: string

  @IsNotEmpty()
  @IsString() 
  IdentidadeDeGenero: string

  @IsNotEmpty()
  @IsString() 
  rg: string
  
  @IsNotEmpty()
  @IsString()
  SSP: string

  @IsNotEmpty()
  @IsString()
  UfOrgaoEmissor: string

  @IsNotEmpty()
  @IsString()
  Nacionalidade: string

  @IsNotEmpty()
  @IsString() 
  UFdenaturalidade: string

  @IsNotEmpty()
  @IsString()
  Naturalidade: string

  @IsNotEmpty()
  @IsString()
  Profissao: string

  @IsNotEmpty()
  @IsString()
  Estado: string

  @IsNotEmpty()
  @IsString()
  municipio: string

  @IsNotEmpty()
  @IsString()
  endereco: string

  @IsNotEmpty()
  @IsString()
  bairro: string

  @IsNotEmpty()
  @IsString()
  numero: string

  @IsNotEmpty()
  @IsString()
  logradouro: string

  @IsNotEmpty()
  @IsString()
  complemento: string
}
// UpdateUserDto