import { ObjectType, Field, ID } from '@nestjs/graphql';
import { hashSync } from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @BeforeInsert()
  private criptPasswordCreate(): void {
    this.password = hashSync(this.password, 10);
  }

  @BeforeUpdate()
  private criptPasswordUpdate(): void {
    this.password = hashSync(this.password, 10);
  }
}
