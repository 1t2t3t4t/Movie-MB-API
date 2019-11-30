import IPaginatable from './Paginatable';
import IMovie from './Movie';

export default interface IMovieList extends IPaginatable<IMovie> {
    results: IMovie[]
}