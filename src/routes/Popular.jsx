import { useQuery } from '@tanstack/react-query';
import { getPopular, makeImagePath } from '../api';
import MovieCard from './../components/MovieCard';
import { Wrapper } from './../styled.js';

function Popular() {
  const { data, isLoading, error } = useQuery(['popularMovies'], getPopular);

  return (
    <Wrapper>
      <ul>
        {!isLoading &&
          !error &&
          data?.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              src={makeImagePath(movie.poster_path)}
            />
          ))}
      </ul>
    </Wrapper>
  );
}

export default Popular;
