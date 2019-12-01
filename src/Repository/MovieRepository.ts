import IMovieList from '../model/MovieList';
import Repository from './Repository';
import Request from './Request'
import IMovie from "../model/Movie";

export enum MovieListType {
    UPCOMING = "upcoming",
    POPULAR = "popular",
    NOW_PLAYING = "now_playing"
}

export enum MovieRegion {
    THAILAND = "TH"
}

export default class MovieRepository implements Repository {

    readonly BASE_PATH = "movie"

    async getMovieList(type: MovieListType, page: number, language: string): Promise<IMovieList> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(type)
        .setParams({ page, region: MovieRegion.THAILAND, language })

        return request.get()
    }

    async getMovieById(id: string, language: string): Promise<IMovie> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(id)
        .setParams({ language })

        return request.get()
    }
}