import { useQuery } from '@tanstack/react-query';
import { getNowPlaying, makeImagePath } from '../api';
import { Wrapper } from './../styled.js';
import MovieCard from './../components/MovieCard';

function Now() {
  const { data, isLoading, error } = useQuery(
    ['nowPlayingnMovies'],
    getNowPlaying
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

export default Now;
