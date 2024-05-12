import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { BoletimCriarDTO } from "src/auth/dto/boletimcriar";

@Injectable()
export class BoletimService {
    constructor(private prisma: PrismaService) { }

    async criarBoletim(dto: BoletimCriarDTO): Promise<any> {
        try {

            const boletim = await this.prisma.boletim.create({
                data: {
                    natureza: dto.natureza,
                    data_ocorrido: dto.data_ocorrido,
                    cep_ocorrido: dto.cep_ocorrido,
                    ufBO: dto.ufBO,
                    municipioBO: dto.municipioBO,
                    logradouro: dto.logradouro,
                    apelido: dto.apelido,
                    complemento: dto.complemento,
                    bairro: dto.bairro,
                    ponto_referencai: dto.ponto_referencai,
                    tipo_local: dto.tipo_local,
                    subgrupo: dto.subgrupo,
                    evento: dto.evento,
                    pergunta_relativa: dto.pergunta_relativa,
                    descricao: dto.descricao,
                    nome: dto.nome,
                    cpf: dto.cpf,
                    envolvimento: dto.envolvimento,
                    email1: dto.email1,
                    email2: dto.email2,
                    telefone1: dto.telefone1,
                    telefone2: dto.telefone2,
                    telefone_fixo: dto.telefone_fixo,
                    rede_social1: dto.rede_social1,
                    rede_social2: dto.rede_social2,
                    rede_social3: dto.rede_social3,
                    nome_social: dto.nome_social,
                    filiacao1: dto.filiacao1,
                    filiacao2: dto.filiacao2,
                    raca: dto.raca,
                    sexo: dto.sexo,
                    orientacao: dto.orientacao,
                    identidade_genero: dto.identidade_genero,
                    autodeclaracao: dto.autodeclaracao,
                    rg: dto.rg,
                    orgao_emissor: dto.orgao_emissor,
                    uf_orgao: dto.uf_orgao,
                    nacionalidade: dto.nacionalidade,
                    uf_naturalidade: dto.uf_naturalidade,
                    profissao: dto.profissao,
                    municipio_Envolvido_Endereco: dto.municipio_Envolvido_Endereco,
                    logradouro_Envolvido_Endereco: dto.logradouro_Envolvido_Endereco,
                    numero_Envolvido_Endereco: dto.numero_Envolvido_Endereco,
                    complemento_Envolvido_Endereco: dto.complemento_Envolvido_Endereco,
                    bairro_Envolvido_Endereco: dto.bairro_Envolvido_Endereco,
                    dono_envolvido: dto.dono_envolvido,
                    envolvimento_Objeto: dto.envolvimento_Objeto,
                    descricao_objeto: dto.descricao_objeto,
                    classificao_objeto: dto.classificao_objeto,
                    numero_tel: dto.numero_tel,
                    operadora: dto.operadora,
                    marca_tel: dto.marca_tel,
                    modelo_tel: dto.modelo_tel,
                    cor_tel: dto.cor_tel,
                    tipo_doc: dto.tipo_doc,
                    num_doc: dto.num_doc,
                    tipo_obj: dto.tipo_obj,
                    descricao_obj: dto.descricao_obj,
                    userId: dto.userId

                },
            });
        } catch (error) {
            console.log(error)
        }
    }

    async findAllByUserId(userId: number): Promise<any> {
        try {
            return await this.prisma.boletim.findMany({
                where: {
                    userId: userId
                },
            });
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Não foi possível encontrar os boletins.');
        }
    }

    
}


