import { RouterController, GET } from "anno-express";
import express from 'express';
import TrendingRepository from "../../Repository/TrendingRepository";
import HomeService from '../../Service/HomeService';

@RouterController("/home")
export default class HomeRouterController {

    homeService = new HomeService()

    @GET("/trending")
    async getTrending(req: express.Request, res: express.Response, next: express.NextFunction) {
        const movies = await this.homeService.getTrendingMovie()
        res.send(movies).end()
    }

    @GET("/nowPlaying")
    async getNowPlaying(req: express.Request, res: express.Response, next: express.NextFunction) {
        const movies = await this.homeService.getNowPlayingMovie()
        res.send(movies).end()
    }

}