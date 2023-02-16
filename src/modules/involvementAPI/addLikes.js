import { getLikes } from './getLikes.js';

const addLikes = async () => {
  const likes = await getLikes();
  const likesContainer = document.querySelectorAll('.likes');
  likesContainer.forEach((like) => {
    const id = like.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent;
    const movieLikes = likes.filter((item) => parseInt(item.item_id, 10) === parseInt(id, 10));
    like.textContent = movieLikes.length === 0 ? 0 : movieLikes[0].likes;
  });
};

export default addLikes;