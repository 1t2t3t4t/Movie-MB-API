import TrendingRepository from '../Repository/TrendingRepository';
import IMovieList from '../model/MovieList';
import MovieRepository from '../Repository/MovieRepository';

export default class HomeService {

    private trendingRepository = new TrendingRepository()
    private movieRepository = new MovieRepository()

    async getTrendingMovie(): Promise<IMovieList> {
        const movies = await this.trendingRepository.getTrendingMovie()
        return movies
    }

    async getNowPlayingMovie(): Promise<IMovieList> {
        const movies = await this.movieRepository.getNowPlaying()
        return movies
    }

    async getUpcomingMovie(): Promise<IMovieList> {
        const movies = await this.movieRepository.getUpcoming()
        return movies
    }

}