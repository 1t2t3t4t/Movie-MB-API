import IPaginatable from './Paginatable';
import IMovie from './Movie';

export default interface ITrending extends IPaginatable {
    results: IMovie[]
}