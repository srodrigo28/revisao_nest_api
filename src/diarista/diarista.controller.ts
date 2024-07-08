import { Controller, Get, Param, Render } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Diarista } from './diarista.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('diaristas')
export class DiaristaController {
    constructor( 
        @InjectRepository(Diarista)
        private diaristaRepository: Repository<Diarista>,
    ){}

    @Get()
    @Render('listar_diaristas')
    async listarDiaristas() {
        return { diaristas: await this.diaristaRepository.find() };
    }

    @Get(':id')
    @Render('detalhes')
    async exibirDiarista(@Param('id') id: number) {
        return { diarista: await this.diaristaRepository.findOneBy({id: id}) };
    }
}
