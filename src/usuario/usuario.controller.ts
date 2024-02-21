import { Controller, Get, HttpStatus, Patch, UseGuards } from "@nestjs/common";
import { User } from '@prisma/client'
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";

@UseGuards(JwtGuard)
@Controller('users')
export class UsuarioController {

    @Get('me')
    getme( @GetUser() user: User, ) 
    {
        return user;
    } 

    @Patch()
    editUser(){
        
    }
} 