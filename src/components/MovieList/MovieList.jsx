import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <MovieCard key={film.imdbId} />
    ))}
  </div>
);
