import { Body, Controller, Delete, Get, HttpStatus, Param, Put, Patch, UseGuards } from "@nestjs/common";
import { User } from '@prisma/client'
import { GetUser } from "src/auth/decorator";
import { DeleteUser } from "src/auth/decorator/delet-user.decorator";
import { JwtGuard } from "src/auth/guard";
import { UsuarioService } from "./usuario.service";
import { UpdateUserDto } from "src/auth/dto/update.dto";

@UseGuards(JwtGuard)
@Controller('users')
export class UsuarioController {
    constructor(private UsuarioService: UsuarioService) {
    }

    @Get('me')
    getme(@GetUser() user: User,) {
        return user;
    }

    @Delete(':id')
    async remove(@DeleteUser() user: User, @Param('id') id: number) {
        return this.UsuarioService.remove(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        const userId = parseInt(id, 10)
        return this.UsuarioService.update(userId, data)
    }

} 