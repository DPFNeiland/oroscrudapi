import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto as signup } from "./dto";
import  SignIn  from "./dto/signin.dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { error } from "console";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { Sign } from "crypto";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) { }
    async signup(dto: signup) {
        // gerar a senha
        const senha = await argon.hash(dto.senha)
        // salva os dados do usuário no banco de dados

        try {
            const User = await this.prisma.user.create({
                data: {
                    nome: dto.nome,
                    cpf: dto.cpf,
                    email: dto.email,
                    // telefone: dto.telefone,
                    senha
                }
            })
            // retorna o usuário salvo
            return this.signToken(
                User.id, 
                User.email
            )


            // Cadastrar/Criação da conta            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Este email já foi cadastrado!')
                }
            }
        }
        throw error


    }
    //Logar na conta
    async signin(dto: SignIn) {

        // Achar o usuário pelo email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            },
        });
        // Se o usuário não existir  criar uma exceção
        if (!user) throw new ForbiddenException('Email ou senha incorretos')

        // comparar a senha
        const pwMatches = await argon.verify(user.senha, dto.senha)

        //Se a senha for incorreta criar uma exceção
        if (!pwMatches) throw new ForbiddenException('Email ou senha incorretos')

        // enviar o usuário
        return this.signToken(
            user.id, 
            user.email
        )
    }


    async signToken(
        userId: number, 
        email: string
    ): Promise<{ access_token: string }> {
        
        const payload = {
            sub: userId,
            email
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

