import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto as signup } from "./dto";
import SignIn from "./dto/signin.dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { error } from "console";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) { }
    async signup(dto: signup) {
        // gerar a senha


        // salva os dados do usuário no banco de dados
        if (dto.senha == dto.confirmsenha) {
            const senha = await argon.hash(dto.senha)
            try {
                const User = await this.prisma.user.create({
                    data: {
                        nome: dto.nome,
                        naturalidade: dto.naturalidade,
                        estadocivil: dto.estadocivil,
                        datadenascimento: dto.datadenascimento,
                        email: dto.email,
                        cpf: dto.cpf,
                        cep: dto.cep,
                        apelido: dto.apelido,
                        NomeSocial: dto.NomeSocial,
                        FiliacaoMae: dto.FiliacaoMae,
                        FiliacaoPai: dto.FiliacaoPai,
                        genero: dto.genero,
                        OrientacaoSexual: dto.OrientacaoSexual,
                        Autodeclaracao: dto.Autodeclaracao,
                        rg: dto.rg,
                        SSP: dto.SSP,
                        UfOrgaoEmissor: dto.UfOrgaoEmissor,
                        Nacionalidade: dto.Nacionalidade,
                        UFdenaturalidade: dto.UFdenaturalidade,
                        Naturalidade: dto.Naturalidade,
                        Profissao: dto.Profissao,
                        Estado: dto.Estado,
                        IdentidadeDeGenero: dto.IdentidadeDeGenero,
                        municipo: dto.municipo,
                        endereco: dto.endereco,
                        bairro: dto.bairro,
                        numero: dto.numero,
                        logradouro: dto.logradouro,
                        complemento: dto.complemento,
                        senha: senha
                    }
                })
                // retorna o usuário salvo
                return this.signToken(
                    User.id,
                    User.cpf
                )


                // Cadastrar/Criação da conta            
            } catch (error) {
                console.log(error)
                if (error instanceof PrismaClientKnownRequestError) {
                    if (error.code === 'P2002') {
                        throw new ForbiddenException('Este email e/ou cpf já foram cadastrados!')
                    }
                }
            }

            throw error
        }
        throw new BadRequestException('Senhas diferetes')

    }
    //Logar na conta
    async signin(dto: SignIn) {
        // Achar o usuário pelo email
        const user = await this.prisma.user.findUnique({
            where: {
                cpf: dto.cpf
            },
        });
    
        // Se o usuário não existir criar uma exceção
        if (!user) throw new ForbiddenException('CPF ou senha incorretos');
    
        // comparar a senha
        const pwMatches = await argon.verify(user.senha, dto.senha);
    
        // Se a senha for incorreta criar uma exceção
        if (!pwMatches) throw new ForbiddenException('CPF ou senha incorretos');
    
        // Gerar o token de acesso
        const accessToken = await this.signToken(user.id, user.cpf);
    
        // Verificar se o token foi gerado corretamente
        if (!accessToken) {
            throw new Error('Não foi possível gerar o token de acesso');
        }
    
        // enviar o usuário e o token
        return {
            access_token: accessToken.access_token,
            user: user
        };
    }


    async signToken(
        userId: number,
        cpf: string
    ): Promise<{ access_token: string }> {

        const payload = {
            sub: userId,
            cpf
        }

        const secret = this.config.get('JWT_SECRET')

        const token = await this.jwt.signAsync(

            payload, {
            expiresIn: '15m',
            secret: secret,
        },
        );

        return {
            access_token: token,
        }

    }

    /*async deletePost(@Param('id') id: string): Promise<PostModel> {
      return this.postService.deletePost({ id: Number(id) });
    }*/

}

