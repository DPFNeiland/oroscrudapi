/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
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

  async GetUser(userId: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  };


}
