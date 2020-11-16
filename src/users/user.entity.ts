import { ObjectType, Field, ID, HideField, GraphQLISODateTime } from '@nestjs/graphql';
import { hashPasswordTransform } from 'src/common/transformers/crypto-transform';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { FilterableField } from "@nestjs-query/query-graphql";

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @FilterableField()
  name: string;

  @Column()
  @FilterableField()
  sobrenome: string;

  @Column()
  @FilterableField()
  email: string;

  @Column({
    transformer: hashPasswordTransform
  })
  @HideField()
  password: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updateAt: Date;

  @DeleteDateColumn()
  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt: Date;
}
