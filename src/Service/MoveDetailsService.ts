import MovieRepository from '../Repository/MovieRepository';
import IMovie from "../model/Movie";
import e = require("express");

export default class MovieDetailsService {

    movieRepository = new MovieRepository()

    async getMovieDetails(id?: string, language: string = ""): Promise<IMovie> {
        if (id === undefined) {
            throw new Error("Id is null")
        }
        
        return this.movieRepository.getMovieById(id, language)
    }
}