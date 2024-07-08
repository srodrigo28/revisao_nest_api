import { Controller, Get, Param, Patch, Post, Redirect, Render, Req } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Diarista } from './diarista.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('diaristas')
export class DiaristaController {
    constructor( 
        @InjectRepository(Diarista)
        private diaristaRepository: Repository<Diarista>,
    ){}

    @Get() // LISTAR TODOS
    @Render('listar_diaristas')
    async listarDiaristas() {
        return { diaristas: await this.diaristaRepository.find(), titulo: 'Lista de Diaristas' };
    }

    @Get('show/:id') // LISTAR 1
    @Render('detalhes')
    async exibirDiarista(@Param('id') id: number) {
        return {
            diarista: await this.diaristaRepository.findOneBy({id: id}), 
            titulo: 'Detalhes '  
        };
    }
    
    @Get('create') // Inserir View
    @Render('create')
    createView(){}

    @Get(':id/edit') // Editar View
    @Render('edit')
    async edit(@Param('id') id: number){
        const diarista = await this.diaristaRepository.findOneBy({ id: id })

        return { diarista: diarista };
    }

    @Post('create') // Inserir Function
    @Redirect('/diaristas')
    async create(@Req() request: Request){
        const diarista = new Diarista();
        diarista.nome     = request.body['nome']
        diarista.idade    = request.body['idade']
        diarista.endereco = request.body['endereco']

        return await this.diaristaRepository.save(diarista);
    }

    @Patch(':id') // Editar Function
    @Redirect('/diaristas')
    async update( @Param('id') id: number, @Req() request: Request){
        const diarista = await this.diaristaRepository.findOneBy({ id: id });

        diarista.nome = request.body['nome'];
        diarista.idade = request.body['idade'];
        diarista.endereco = request.body['endereco'];

        return await this.diaristaRepository.save(diarista);

    }
}

