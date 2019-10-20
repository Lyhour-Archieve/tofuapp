import { Route } from "../route";
import express from 'express';
import { UserController } from "./user-controller";
import { checkToken } from "../auth";

export class UserRoutes implements Route {
    constructor(private readonly userController: UserController) {

    }

    contributeRoutes(app: express.Application): void {
        app.get('/user', checkToken, this.userController.getUser);
        app.put('/user/:id', this.userController.updateUser);
        app.post('/login', this.userController.login);
    }
}