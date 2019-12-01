import TrendingRepository from '../Repository/TrendingRepository';
import IMovieList from '../model/MovieList';
import MovieRepository, { MovieListType } from '../Repository/MovieRepository';
import Paginator from './Paginator';

export default class HomeService {

    private trendingRepository = new TrendingRepository()
    private movieRepository = new MovieRepository()

    async getTrendingMovie(page: number, limit: number): Promise<IMovieList> {
        const paginator = new Paginator()

        return paginator.getList(page, limit, this.trendingRepository.getTrendingMovie.bind(this.trendingRepository))
    }

    private async getMovieList(type: MovieListType, page: number, limit: number, language: string): Promise<IMovieList> {
        const getter = (iterator: number) => this.movieRepository.getMovieList(type, iterator, language)
        const paginator = new Paginator()

        return paginator.getList(page, limit, getter)
    }

    async getNowPlayingMovie(page: number, limit: number, language: string = ""): Promise<IMovieList> {
        return this.getMovieList(MovieListType.NOW_PLAYING, page, limit, language)
    }

    async getUpcomingMovie(page: number, limit: number, language: string = ""): Promise<IMovieList> {
        return this.getMovieList(MovieListType.UPCOMING, page, limit, language)
    }

}