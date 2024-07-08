import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diarista{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column( { unique: true, nullable: false } )
    nome: string;
    
    @Column( { nullable: false } )
    idade: number;

    @Column( { nullable: false } )
    endereco: string;
}