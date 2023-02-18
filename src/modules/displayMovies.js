import getMovies from './getMovies.js';
import renderMovies from './renderMovies.js';

const displayMovies = async () => {
  const movies = await getMovies();
  movies.forEach((movie) => {
    renderMovies(movie);
  });
};
export default displayMovies;