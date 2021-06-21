import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

  @Column("int", { array: true })
  passwordFile!: number[]

  @Column()
  wallet!: string

  @Column()
  salt!: string
}
