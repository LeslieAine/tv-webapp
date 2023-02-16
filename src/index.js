import './index.html';
import './style.css';
import './modules/renderMovies.js';
import displayMovies from './modules/displayMovies.js';
import { addCommentButtonsLister } from './modules/eventListeners.js';

const displayUi = async () => {
  await displayMovies();
  // addListeners();
  addCommentButtonsLister();
};

displayUi();