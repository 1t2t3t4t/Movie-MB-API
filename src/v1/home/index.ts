import { RouterController, GET } from "../../framework/annotation-restapi";
import express from 'express';

@RouterController("/home")
export default class HomeRouterController {

    @GET("/")
    getHome(req: express.Request, res: express.Response, next: express.NextFunction) {
        const movies = [
            {
                name: "Kuy"
            },
            {
                name: "Sus"
            }
        ]
        res.send(movies).end()
    }

}