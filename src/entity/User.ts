import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 100, nullable: true })
    firstName: string

    @Column({ type: "varchar", length: 100, nullable: true })
    lastName: string

    @Column({ nullable: true })
    age: number

}
