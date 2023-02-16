/* eslint-disable linebreak-style */
const moviesList = document.querySelector(".movies");

const renderMovies = (item) => {
  const list = document.createElement("li");
  list.classList.add("list");
  list.innerHTML = `
    <p class="movie-id hidden">${item.id}</p>
    <img src="${item.image.medium}" alt="" srcset="" />
    <div>
        <h3>${item.name}</h3>
        <div class="likes-comments">
            <div class = "likes-container">
                <i class="fa-regular fa-heart empty like-btn like"></i>
                <i class="fa-solid fa-heart filled like-btn like"></i>
                <p class="likes like">0</p>  
            </div>  
            <button class="comment-btn">
              <a href="#pop-up">
              Comment <i class="fa-solid fa-comments"></i>
              </a>  
            </button>
        </div>
    </div>
    `;

  moviesList.appendChild(list);
};

export default renderMovies;
