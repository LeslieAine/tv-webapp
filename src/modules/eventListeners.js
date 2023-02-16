import popup from './popup.js';
import getMovies from './getMovies.js';

const pop = document.querySelector('.pop');
const body = document.querySelector('body');

const addCommentButtonsLister = async () => {
  const movies = await getMovies();
  const btns = document.querySelectorAll('.comment-btn');
  popup(btns, movies);
};

pop.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    pop.classList.add('inactive');
    body.classList.remove('noflow');
  }
});

export default addCommentButtonsLister;
