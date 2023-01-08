import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "expressjs",
    synchronize: true,
    logging: false,
    entities: [User,Post,Category],
    migrations: [],
    subscribers: [],
})
