import { Module } from '@nestjs/common';
import { BoletimController } from './boletim.controller';
import { BoletimService } from './boletim.service';
@Module({
    controllers: [BoletimController],
    providers: [BoletimService]

})
export class BoletimModule {}
