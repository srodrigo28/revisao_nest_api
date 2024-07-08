import { Module } from '@nestjs/common';
import { DiaristaModule } from './diarista/diarista.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diarista } from './diarista/diarista.entity';

@Module({
  imports: [
    DiaristaModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curso_nest',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: [Diarista],
      synchronize: true,
    }),  // Replace 'your_username', 'your_password', and 'your_database' with your PostgreSQL credentials.
    ],
})

export class AppModule {}
