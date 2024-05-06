import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { BoletimCriarDTO } from "src/auth/dto/boletimcriar";
import { BoletimService } from "./boletim.service";

@Controller('boletim')
export class BoletimController {
    constructor(private boletimService: BoletimService) {}

    @UseGuards(JwtGuard) // Proteja a rota com JwtGuard se necessário
    @Post('criarBO')
    async criarBO(@Body() dto: BoletimCriarDTO): Promise<any> { // Use o tipo correto para o retorno da função
        return await this.boletimService.criarBoletim(dto);
    }
}
