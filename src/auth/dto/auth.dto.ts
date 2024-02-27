import { IsNotEmpty, IsString, IsEmail, IsInt } from "class-validator"

export class AuthDto {

    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    cpf: string    
    
    @IsEmail()
    @IsNotEmpty()
    email: string

    // Mexer nisso dq
    @IsInt()
    @IsNotEmpty()
    telefone: string

    @IsString()
    @IsNotEmpty()
    senha: string




}