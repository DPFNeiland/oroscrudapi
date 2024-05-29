import { Body, Controller, Delete, Get, HttpStatus, Param, Put, Patch, UseGuards } from "@nestjs/common";
import { User } from '@prisma/client'
import { GetUser } from "src/auth/decorator";
import { DeleteUser } from "src/auth/decorator/delet-user.decorator";
import { JwtGuard } from "src/auth/guard";
import { UsuarioService } from "./usuario.service";
import { UpdateUserDto } from "src/auth/dto/update.dto";

@Controller('users')
export class UnsuarioController {
    constructor(private UsuarioService: UsuarioService) { }

    @Get(':id')
    getmeid(@Param("id") idUsuario : string) {
        return this.UsuarioService.GetUser(parseInt(idUsuario));
    }


} 