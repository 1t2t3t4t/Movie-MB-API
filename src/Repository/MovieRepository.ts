import IMovieList from '../model/MovieList';
import Repository from './Repository';
import Request from './Request'

enum MovieListPath {
    LATEST = "latest",
    POPULAR = "popular",
    NOW_PLAYING = "now_playing"
}

export default class MovieRepository implements Repository {

    readonly BASE_PATH = "movie"

    async getNowPlaying(): Promise<IMovieList> {
        const request = new Request()
        .addPath(this.BASE_PATH)
        .addPath(MovieListPath.NOW_PLAYING)
        .setParams()

        return request.get()
    }
}