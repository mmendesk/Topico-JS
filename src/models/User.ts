import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('class')
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @Column()
    email: string;

    @Column()
    estadoCivil: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_At' })
    updatedAt: Date;
}