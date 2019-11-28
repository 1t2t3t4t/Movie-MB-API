import ITrending from '../model/Trending'
import Request from './Request'

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

export default class TrendingRepository {

    private readonly BASE_PATH = "trending"

    async getTrendingMovie(): Promise<ITrending> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(TrendingType.MOVIE)
        .addPath(TrendingTimeWindow.WEEK)
        .setParams()
        
        return request.get<ITrending>()
    }

}