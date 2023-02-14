const moviesList = document.querySelector(".movies");

const renderMovies = (movie) => {
  const list = document.createElement("li");
  list.classList.add("list");
  list.innerHTML = `
    <p class="movie-id hidden">${movie.id}</p>
    <img src="${movie.image.medium}" alt="" srcset="" />
    <div>
        <h3>${movie.name}</h3>
        <div class="flex">
            <span> Likes <i class="fa-solid fa-heart"></i></span>
            <span> Comments <i class="fa-solid fa-comment"></i></span>
        </div>
    </div>
    `;

  moviesList.appendChild(list);
};

export default renderMovies;
