import { Module } from '@nestjs/common';
import { DiaristaController } from './diarista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diarista } from './diarista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diarista])],
  controllers: [DiaristaController],
})
export class DiaristaModule {}
