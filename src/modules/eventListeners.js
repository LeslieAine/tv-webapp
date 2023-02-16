import { addLike } from './involvementAPI/getLikes.js';
import addLikes from './involvementAPI/addLikes.js';

document.addEventListener('DOMContentLoaded', async () => {
  addLikes();
});

const addListeners = () => {
  const emptyLikes = document.querySelectorAll('.empty');
  const filledLikes = document.querySelectorAll('.filled');
  Array.from(emptyLikes).forEach((likeImg) => {
    likeImg.addEventListener('click', async (e) => {
      e.target.classList.add('hidden');
      e.target.nextElementSibling.classList.remove('hidden');
      const movieId = e.target.closest('.list').querySelector('.movie-id').textContent;
      await addLike(movieId);
    });
  });

  Array.from(filledLikes).forEach((filledImg) => {
    filledImg.addEventListener('click', (e) => {
      e.target.classList.add('hidden');
      e.target.previousElementSibling.classList.remove('hidden');
    });
  });
};

export default addListeners;
