import { RouterController, GET } from "../../framework/annotation-restapi";
import express from 'express';
import TrendingRepository from "../../movieDBRepository/TrendingRepository";

@RouterController("/home")
export default class HomeRouterController {

    trendingRepository = new TrendingRepository()    

    @GET("/trending")
    async getTrending(req: express.Request, res: express.Response, next: express.NextFunction) {
        const movies = await this.trendingRepository.getTrendingMovie()
        res.send(movies).end()
    }

}