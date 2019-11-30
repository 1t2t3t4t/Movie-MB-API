import { RouterController, GET } from "anno-express";
import MovieDetailsService from "../../Service/MoveDetailsService";
import express from 'express'

@RouterController("/movie")
export default class MovieRouterController {

    movieDetailsService = new MovieDetailsService()
    
    @GET("/:id")
    async getMovieDetails(req: express.Request, res: express.Response, next: express.NextFunction) {
        const id = req.params.id
        const movie = await this.movieDetailsService.getMovieDetails(id)
        
        res.send(movie).end()
    }
}