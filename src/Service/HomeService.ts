import TrendingRepository from '../Repository/TrendingRepository';
import IMovieList from '../model/MovieList';
import MovieRepository from '../Repository/MovieRepository';

export default class HomeService {

    private trendingRepository = new TrendingRepository()
    private movieRepository = new MovieRepository()

    async getTrendingMovie(page: number): Promise<IMovieList> {
        const movies = await this.trendingRepository.getTrendingMovie(page)
        return movies
    }

    async getNowPlayingMovie(page: number): Promise<IMovieList> {
        const movies = await this.movieRepository.getNowPlaying(page)
        return movies
    }

    async getUpcomingMovie(page: number): Promise<IMovieList> {
        const movies = await this.movieRepository.getUpcoming(page)
        return movies
    }

}