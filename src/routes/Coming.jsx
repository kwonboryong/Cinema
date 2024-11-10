import { useQuery } from '@tanstack/react-query';
import { getComingSoon, makeImagePath } from '../api';
import { Wrapper } from './../styled.js';
import MovieCard from './../components/MovieCard';

function Coming() {
  const { data, isLoading, error } = useQuery(
    ['comingSoonMovies'],
    getComingSoon
  );

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

export default Coming;
