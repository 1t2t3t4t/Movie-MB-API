import TrendingRepository from '../Repository/TrendingRepository';
import IMovieList from '../model/MovieList';
import MovieRepository, { MovieListType } from '../Repository/MovieRepository';
import IMovie from "../model/Movie";

export default class HomeService {

    private trendingRepository = new TrendingRepository()
    private movieRepository = new MovieRepository()

    async getTrendingMovie(page: number, limit: number): Promise<IMovieList> {
        const movies = await this.trendingRepository.getTrendingMovie(page)
        return movies
    }

    private async getMovieList(type: MovieListType, page: number, limit: number): Promise<IMovieList> {
        let skip = (page - 1) * limit
        let iterator = Math.floor(skip / 20) + 1
        skip -= (iterator - 1) * 20

        let movies: IMovie[] = []
        let total_pages: number = 0
        let total_results: number = 0

        while (movies.length < limit) {
            const fetchMovies = await this.movieRepository.getMovieList(type, iterator)
            total_results = fetchMovies.total_results
            total_pages = Math.floor(total_results / limit)
            for (let i=skip;i<fetchMovies.results.length;i++) {
                if (movies.length >= limit) break 
                movies.push(fetchMovies.results[i])
                skip--;
            }
            iterator++
        }

        return {
            page: page,
            results: movies,
            total_results,
            total_pages
        }
    }

    async getNowPlayingMovie(page: number, limit: number): Promise<IMovieList> {
        return this.getMovieList(MovieListType.NOW_PLAYING, page, limit)
    }

    async getUpcomingMovie(page: number, limit: number): Promise<IMovieList> {
        return this.getMovieList(MovieListType.UPCOMING, page, limit)
    }

}