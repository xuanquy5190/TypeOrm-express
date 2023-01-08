import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Category } from '../entity/Category'

export class CategoryController {

    private categoryRepository = AppDataSource.getRepository(Category)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const categoryId = parseInt(request.params.id)


        const category = await this.categoryRepository.findOne({
            where: { categoryId }
        })

        if (!category) {
            return "unregistered category"
        }
        return category
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { categoryId, title } = request.body;

        const category = Object.assign(new Category(), {
            categoryId,
            title
        })

        return this.categoryRepository.save(category)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const categoryId = parseInt(request.params.id)

        let categoryToRemove = await this.categoryRepository.findOneBy({ categoryId })

        if (!categoryToRemove) {
            return "this category not exist"
        }

        await this.categoryRepository.remove(categoryToRemove)

        return "category has been removed"
    }

}