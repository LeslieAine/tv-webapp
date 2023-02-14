// import getMovies from "./getMovies.js";
// import renderMovies from "./renderMovies.js";

// document.addEventListener("DOMContentLoaded", async () => {
//   const movies = await getMovies();
//   movies.results.forEach((movie) => {
//     renderMovies(movie);
//   });
// });

import getMovies from "./getMovies.js";
import renderMovies from "./renderMovies.js";

// document.addEventListener("DOMContentLoaded", async () => {
//   const movies = await getMovies();
//   movies.forEach((movie) => {
//     renderMovies(movie);
//   });
// });

const displayMovies = async () => {
    const movies = await getMovies();
    movies.forEach((movie) => {
    renderMovies(movie);
    })
}

export default displayMovies;
