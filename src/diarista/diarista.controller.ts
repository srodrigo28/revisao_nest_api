import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
    @Get(':id')
    @Render('home')
    root(@Param('id') id: number) {
        // return 'Esta es la lista de diaristas';

        const diaristas = [
            { nome: 'Paulo' },
            { nome: 'Alex' }
        ];
        return{ diarista: diaristas[id] };
    }
}
