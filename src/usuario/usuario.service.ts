import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
