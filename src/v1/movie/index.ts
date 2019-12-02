import { RouterController, GET } from "anno-express";
import MovieDetailsService from "../../Service/MovieDetailsService";
import express from 'express'
import { LanguageCode } from '../../model/LanguageCode';

@RouterController("/movie")
export default class MovieRouterController {

    movieDetailsService = new MovieDetailsService()
    
    @GET("/:id")
    async getMovieDetails(req: express.Request, res: express.Response, next: express.NextFunction) {
        const id = req.params.id 
        if (!id) {
            res.send(500)
            return 
        }
        const movie = await this.movieDetailsService.getMovieDetails(id)
        
        res.send(movie).end()
    }
}