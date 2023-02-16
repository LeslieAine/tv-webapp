import { addLike } from './involvementAPI/getLikes.js';
import addLikes from './involvementAPI/addLikes.js';
import popup from './popup.js';
import getMovies from './getMovies.js';
import moviesCounter from './counters/moviesCounter.js';

const pop = document.querySelector('.pop');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', async () => {
    addLikes();
    const movies = await getMovies();
    document.querySelector('.main-movies-counter').textContent = `(${moviesCounter()})`;
});

export const addCommentButtonsLister = async () => {
    const movies = await getMovies();
    const btns = document.querySelectorAll('.comment-btn');
    popup(btns, movies);
}

export const addListeners = () => {
    const emptyLikes = document.querySelectorAll('.empty');
    const filledLikes = document.querySelectorAll('.filled');
    Array.from(emptyLikes).forEach((likeImg) => {
        likeImg.addEventListener('click', async(e) => {
            e.target.classList.add('hidden');
            e.target.nextElementSibling.classList.remove('hidden');
            const movieId = e.target.closest('.list').querySelector('.movie-id').textContent;
            await addLike(movieId);
        })
    });

    Array.from(filledLikes).forEach((filledImg) => {
        filledImg.addEventListener('click', (e) => {
            e.target.classList.add('hidden');
            e.target.previousElementSibling.classList.remove('hidden');
        })
    });
}


pop.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      pop.classList.add('inactive');
      body.classList.remove('noflow');
    }
  });



