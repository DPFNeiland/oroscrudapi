import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { BoletimCriarDTO } from "src/auth/dto/boletimcriar";
import { BoletimService } from "./boletim.service";
import { Boletim } from "@prisma/client";

@Controller('boletim')
export class BoletimController {
    constructor(private boletimService: BoletimService) {}

    // @UseGuards(JwtGuard) // Proteja a rota com JwtGuard se necessário
    @Post('criarBO')
    async criarBO(@Body() dto: BoletimCriarDTO): Promise<any> { 
        return await this.boletimService.criarBoletim(dto);
    }

    @Get('user/:id')
    async getBO(@Param('id') id: string): Promise<Boletim[]> {
        const userId = parseInt(id, 10);
        return this.boletimService.findAllByUserId(userId);
    }

    @Get('todos')
    async getAllBOs(): Promise<Boletim[]> {
        return this.boletimService.findAll(); 
    }
}
