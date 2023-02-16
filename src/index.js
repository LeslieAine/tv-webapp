import './index.html';
import './style.css';
import './modules/renderMovies.js';
import displayMovies from './modules/displayMovies.js';
import addListeners from './modules/eventListeners.js';

const displayUi = async () => {
  await displayMovies();
  addListeners();
};

displayUi();