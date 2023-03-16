import './index.html';
import './style.css';
import './modules/renderMovies.js';
import displayMovies from './modules/displayMovies.js';
import { addCommentButtonsLister, addListeners } from './modules/eventListeners.js';
import './modules/counters/moviesCounter.js';

const displayUi = async () => {
  await displayMovies();
  addListeners();
  addCommentButtonsLister();
};

displayUi();