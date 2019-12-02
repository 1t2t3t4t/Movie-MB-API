import MovieRepository from '../Repository/MovieRepository';
import IMovie from "../model/Movie";
import { LanguageCode } from '../model/LanguageCode';
import e = require("express");

export default class MovieDetailsService {

    movieRepository = new MovieRepository()

    async getMovieDetails(id: string, language: LanguageCode = LanguageCode.US): Promise<IMovie> {
        return this.movieRepository.getMovieById(id, language)
    }
}