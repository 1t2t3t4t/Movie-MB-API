import IMovieList from '../model/MovieList';
import Repository from './Repository';
import Request from './Request'

enum MovieListType {
    UPCOMING = "upcoming",
    POPULAR = "popular",
    NOW_PLAYING = "now_playing"
}

export default class MovieRepository implements Repository {

    readonly BASE_PATH = "movie"

    private async getMovieList(type: MovieListType): Promise<IMovieList> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(type)
        .setParams()

        return request.get()
    }

    async getNowPlaying(): Promise<IMovieList> {
        return this.getMovieList(MovieListType.NOW_PLAYING)
    }

    async getUpcoming(): Promise<IMovieList> {
        return this.getMovieList(MovieListType.UPCOMING)
    }
}