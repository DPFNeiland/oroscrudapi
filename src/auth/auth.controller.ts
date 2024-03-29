import { Body, Controller, Delete, HttpCode, HttpStatus, ParseIntPipe, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import SignIn from "./dto/signin.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }


    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
        // Se registrar / cadastrar
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: SignIn) {
        return this.authService.signin(dto)
        // Logar
    }


    // @Delete('delete')
    // delete( ){}

    
}