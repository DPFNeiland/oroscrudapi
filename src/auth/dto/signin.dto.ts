import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export default class SignIn {


    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    senha: string


}