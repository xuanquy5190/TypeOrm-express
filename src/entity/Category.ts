import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: number

    @Column({ type: "varchar", length: 100, nullable: true })
    title: string
}