import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export default class SignIn {


    @IsNotEmpty()
    cpf: string

    @IsString()
    @IsNotEmpty()
    senha: string


}