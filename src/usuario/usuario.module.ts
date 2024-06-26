/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UnsuarioController } from './unsuario.controller';

@Module({
    controllers: [UsuarioController, UnsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}
