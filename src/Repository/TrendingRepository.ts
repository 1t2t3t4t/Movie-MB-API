import Request from './Request'
import IMovieList from '../model/MovieList';
import Repository from './Repository';

export enum TrendingType {
    ALL = "all",
    MOVIE = "movie",
    TV = "tv",
    PERSON = "person"
}

export enum TrendingTimeWindow {
    DAY = "day",
    WEEK = "week"
}

export default class TrendingRepository implements Repository {

    readonly BASE_PATH = "trending"

    async getTrendingMovie(): Promise<IMovieList> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(TrendingType.MOVIE)
        .addPath(TrendingTimeWindow.WEEK)
        .setParams()
        
        return request.get()
    }

}