import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Post } from "../entity/Post"

export class PostController {

    private postRepository = AppDataSource.getRepository(Post)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const postid = parseInt(request.params.id)


        const post = await this.postRepository.findOne({
            where: { postid }
        })

        if (!post) {
            return "unregistered post"
        }
        return post
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { authorid, title, published, createdAt, updateAt, publishedAt, content } = request.body;

        const post = Object.assign(new Post(), {
            authorid,
            title,
            published,
            createdAt,
            updateAt,
            publishedAt,
            content
        })

        return this.postRepository.save(post)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const postid = parseInt(request.params.id)

        let postToRemove = await this.postRepository.findOneBy({ postid })

        if (!postToRemove) {
            return "this post not exist"
        }

        await this.postRepository.remove(postToRemove)

        return "post has been removed"
    }

}