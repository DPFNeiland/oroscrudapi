import { IsString, IsBoolean, IsNumber, IsOptional, IsDate } from 'class-validator';

export class BoletimCriarDTO {
  @IsOptional()
  @IsString()
  natureza?: string;

  @IsOptional()
  @IsDate()
  data_ocorrido?: Date;

  @IsOptional()
  @IsString()
  hora_ocorrido?: string;

  @IsOptional()
  @IsString()
  cep_ocorrido?: string;

  @IsOptional()
  @IsString()
  ufBO?: string;

  @IsOptional()
  @IsString()
  municipioBO?: string;

  @IsOptional()
  @IsString()
  logradouro?: string;

  @IsOptional()
  @IsNumber()
  numero?: number;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  ponto_referencai?: string;

  @IsOptional()
  @IsString()
  tipo_local?: string;

  @IsOptional()
  @IsString()
  subgrupo?: string;

  @IsOptional()
  @IsString()
  evento?: string;

  @IsOptional()
  @IsBoolean()
  pergunta_relativa?: boolean;

  @IsOptional()
  @IsString()
  descricao?: string;

  // Envolvido

  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsDate()
  nascimento?: Date;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  envolvimento?: string;

  // Envolvido Contato

  @IsOptional()
  @IsString()
  email1?: string;

  @IsOptional()
  @IsString()
  email2?: string;

  @IsOptional()
  @IsString()
  telefone1?: string;

  @IsOptional()
  @IsString()
  telefone2?: string;

  @IsOptional()
  @IsString()
  telefone_fixo?: string;

  @IsOptional()
  @IsString()
  rede_social1?: string;

  @IsOptional()
  @IsString()
  rede_social2?: string;

  @IsOptional()
  @IsString()
  rede_social3?: string;

  // Envolvido Info

  @IsOptional()
  @IsString()
  apelido?: string;

  @IsOptional()
  @IsString()
  nome_social?: string;

  @IsOptional()
  @IsString()
  filiacao1?: string;

  @IsOptional()
  @IsString()
  filiacao2?: string;

  @IsOptional()
  @IsString()
  raca?: string;

  @IsOptional()
  @IsString()
  sexo?: string;

  @IsOptional()
  @IsString()
  orientacao?: string;

  @IsOptional()
  @IsString()
  identidade_genero?: string;

  @IsOptional()
  @IsString()
  autodeclaracao?: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  orgao_emissor?: string;

  @IsOptional()
  @IsString()
  uf_orgao?: string;

  @IsOptional()
  @IsString()
  nacionalidade?: string;

  @IsOptional()
  @IsString()
  uf_naturalidade?: string;

  @IsOptional()
  @IsString()
  profissao?: string;

  // Envolvido Endereço

  @IsOptional()
  @IsString()
  cep_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  uf_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  municipio_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  logradouro_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  numero_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  complemento_Envolvido_Endereco?: string;

  @IsOptional()
  @IsString()
  bairro_Envolvido_Endereco?: string;

  // -------------------  OBJETO

  @IsOptional()
  @IsString()
  dono_envolvido?: string;

  @IsOptional()
  @IsString()
  envolvimento_Objeto?: string;

  @IsOptional()
  @IsString()
  descricao_objeto?: string;

  @IsOptional()
  @IsString()
  classificao_objeto?: string;

  // Objeto Telefone

  @IsOptional()
  @IsString()
  numero_tel?: string;

  @IsOptional()
  @IsString()
  operadora?: string;

  @IsOptional()
  @IsString()
  marca_tel?: string;

  @IsOptional()
  @IsString()
  modelo_tel?: string;

  @IsOptional()
  @IsString()
  cor_tel?: string;

  // Objeto Documento

  @IsOptional()
  @IsString()
  tipo_doc?: string;

  @IsOptional()
  @IsString()
  num_doc?: string;

  // Objeto Outro

  @IsOptional()
  @IsString()
  tipo_obj?: string;

  @IsOptional()
  @IsString()
  descricao_obj?: string;

  @IsOptional()
  @IsNumber()
  userId?: number;
}
