import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class AuthDto {


    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    senha: string

    /*@IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    cpf: string*/
}