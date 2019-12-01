import { RouterController, GET } from "anno-express";
import express from 'express';
import HomeService from '../../Service/HomeService';
import PaginationRequest from '../../Service/PaginationRequest';

@RouterController("/home")
export default class HomeRouterController {

    homeService = new HomeService()

    @GET("/trending")
    async getTrending(req: PaginationRequest, res: express.Response, next: express.NextFunction) {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 20
        const movies = await this.homeService.getTrendingMovie(page, limit)
        res.send(movies).end()
    }

    @GET("/nowPlaying")
    async getNowPlaying(req: PaginationRequest, res: express.Response, next: express.NextFunction) {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 20
        const language = req.headers["accept-language"]
        const movies = await this.homeService.getNowPlayingMovie(page, limit, language)
        res.send(movies).end()
    }

    @GET("/upcoming")
    async getUpcoming(req: PaginationRequest, res: express.Response, next: express.NextFunction) {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 20
        const language = req.headers["accept-language"] 
        const movies = await this.homeService.getUpcomingMovie(page, limit, language)
        res.send(movies).end()
    }

}