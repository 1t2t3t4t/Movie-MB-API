import { RouterController, GET } from "anno-express";
import MovieDetailsService from "../../Service/MoveDetailsService";
import express from 'express'

@RouterController("/movie")
export default class MovieRouterController {

    movieDetailsService = new MovieDetailsService()
    
    @GET("/:id")
    async getMovieDetails(req: express.Request, res: express.Response, next: express.NextFunction) {
        const id = req.params.id
        const language = req.headers["accept-language"]
        const movie = await this.movieDetailsService.getMovieDetails(id, language)
        
        res.send(movie).end()
    }
}