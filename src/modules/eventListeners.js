
import popup from './popup.js';
import getMovies from './getMovies.js';
import moviesCounter from './counters/moviesCounter.js';

const pop = document.querySelector('.pop');
const body = document.querySelector('body');

const movieSection = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", async () => {
  addLikes();

  const movies = await getMovies();
  document.querySelector('.main-movies-counter').textContent = `(${moviesCounter()})`;

});

export const addCommentButtonsLister = async () => {
    const movies = await getMovies();
    const btns = document.querySelectorAll('.comment-btn');
    popup(btns, movies);
};

// movieSection.addEventListener('click', async (e) => {
//     if (e.target.classList.contains('empty')) {
//         alert(e.target)
//         const movieId = e.target.closest('.movies').querySelector('.movie-id').textContent;
//         document.querySelector('.empty').classList.add('hidden');
//         document.querySelector('.filled').classList.remove('hidden');
//         await addLike(movieId);
//         addLikes();
//     }
// });

export const addListeners = () => {
  const emptyLikes = document.querySelectorAll(".empty");
  const filledLikes = document.querySelectorAll(".filled");
  Array.from(emptyLikes).forEach((likeImg) => {
    likeImg.addEventListener("click", async (e) => {
      e.target.classList.add("hidden");
      e.target.nextElementSibling.classList.remove("hidden");
      const movieId = e.target
        .closest(".list")
        .querySelector(".movie-id").textContent;
      await addLike(movieId);
    });
  });

  Array.from(filledLikes).forEach((filledImg) => {
    filledImg.addEventListener("click", (e) => {
      e.target.classList.add("hidden");
      e.target.previousElementSibling.classList.remove("hidden");
    });
  });
};

pop.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      pop.classList.add('inactive');
      body.classList.remove('noflow');
    }
  });

