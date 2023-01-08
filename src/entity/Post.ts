import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    postid: number

    @Column({ nullable: true })
    authorid: number

    @Column({ nullable: true })
    categoryId: number

    @Column({ type: "varchar", length: 100, nullable: true })
    title: string

    @Column({ nullable: true })
    published: number

    @CreateDateColumn({
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"
    })
    createdAt: Date

    @CreateDateColumn({
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"
    })
    updateAt: Date

    @CreateDateColumn({
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"
    })
    publishedAt: Date

    @Column({ type: "varchar", length: 1000, nullable: true })
    content: string

}