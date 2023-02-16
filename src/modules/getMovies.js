/* eslint-disable linebreak-style */
const url = 'https://api.tvmaze.com/shows';

const getMovies = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data.slice(0, 20);
};

export default getMovies;
