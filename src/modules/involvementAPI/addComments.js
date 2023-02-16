import renderComments from '../renderComments.js';
import getComments from './getComments.js';

export default (button, username, sc, movieId) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    movieId = movieId.toString();
    const uname = username.value.trim();
    const points = sc.value.trim();
    if (uname && points) {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/comments/', {
        method: 'POST',
        body: JSON.stringify({
          item_id: movieId,
          username: uname,
          comment: points,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
    username.value = '';
    sc.value = '';

    // rendercomments after update
    const fillcoms = await getComments(movieId);
    const mycoms = document.querySelector('.comments');
    renderComments(fillcoms, mycoms);
  });
};