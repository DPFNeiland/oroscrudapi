import { Controller, Delete, Get, HttpStatus, Param, Patch, UseGuards } from "@nestjs/common";
import { User } from '@prisma/client'
import { GetUser } from "src/auth/decorator";
import { DeleteUser } from "src/auth/decorator/delet-user.decorator";
import { JwtGuard } from "src/auth/guard";
import { UsuarioService } from "./usuario.service";

@UseGuards(JwtGuard)
@Controller('users')
export class UsuarioController {
    constructor(private UsuarioService: UsuarioService) {
    }

    @Get('me')
    getme( @GetUser() user: User, ) 
    {
        return user;
    }

    @Delete(':id')
    async remove(@DeleteUser() user: User, @Param('id') id:number){
        return this.UsuarioService.remove(id)
    }   

    /*
        async remove(@DeleteUser() user: User, @Param('id') id:number, @Res() resp:Response){
        return resp .send(200).json({
            Mensagem: "Usuario deletado"
        })
    }   
    */ 

    @Patch()
    editUser(){
        
    }
} 