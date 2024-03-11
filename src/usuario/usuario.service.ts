/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/auth/dto/update.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) { }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
  }


  // Mexer nisso dq
  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data
    })
  }
}
