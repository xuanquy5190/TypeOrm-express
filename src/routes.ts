import { CategoryController } from "./controller/CategoryController"
import { PostController } from "./controller/PostController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    //User
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    //Post - blog
    method: "get",
    route: "/posts",
    controller: PostController,
    action: "all"
}, {
    method: "get",
    route: "/posts/:id",
    controller: PostController,
    action: "one"
}, {
    method: "post",
    route: "/posts",
    controller: PostController,
    action: "save"
}, {
    method: "delete",
    route: "/posts/:id",
    controller: PostController,
    action: "remove"
}, {
    //Category - blog
    method: "get",
    route: "/categorys",
    controller: CategoryController,
    action: "all"
}, {
    method: "get",
    route: "/categorys/:id",
    controller: CategoryController,
    action: "one"
}, {
    method: "post",
    route: "/categorys",
    controller: CategoryController,
    action: "save"
}, {
    method: "delete",
    route: "/categorys/:id",
    controller: CategoryController,
    action: "remove"
}]