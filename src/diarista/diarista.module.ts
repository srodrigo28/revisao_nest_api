import { Module } from '@nestjs/common';
import { DiaristaController } from './diarista.controller';

@Module({
  controllers: [DiaristaController],
})
export class DiaristaModule {}
