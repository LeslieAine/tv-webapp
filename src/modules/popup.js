import addComments from './involvementAPI/addComments.js';
import getComments from './involvementAPI/getComments.js';
import renderComments from './renderComments.js';

const body = document.querySelector('body');
const pop = document.querySelector('.pop');

const popup = (button, movies) => {
  button.forEach((btn) => {
    btn.addEventListener('click', async () => {
      body.classList.add('noflow');
      pop.innerHTML = '';
      pop.classList.remove('inactive');
      const par = btn.parentElement.parentElement.parentElement;
      const id = par.querySelector('.movie-id').innerHTML;
      const currMovie = movies.filter((movie) => movie.id === Number(id));
      const fillcoms = await getComments(currMovie[0].id);
      const closebtn = document.createElement('a');
      closebtn.classList.add('closeBtn');
      closebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      pop.appendChild(closebtn);
      const template = document.createElement('div');
      template.classList.add('container');
      template.innerHTML = `
      <div class="movie-details">
        <img src="${currMovie[0].image.medium}" alt="${currMovie.name}">
        <div class="details">
            <h1>${currMovie[0].name}</h1>
            <div class="description">
                <p><strong>Language:</strong> ${currMovie[0].language}</p>
                <p><strong>Genre:</strong> ${currMovie[0].genres}</p>
                <p><strong>About:</strong> ${currMovie[0].summary}</p>
            </div>
        </div>
      </div>
      <div class="show-comments">
        <h1 class="comments-heading">Comments<span class="com-count">(0)</span></h1>
        <ul class="comments"></ul>
        <form class="myform">
            <h1>Add a Comment</h1>
            <input id="name" type="text" placeholder="Your name" required>
            <textarea id="areatext" cols="30" rows="5" placeholder="Insights" required></textarea>
            <button id="submit" class="comment-btn">Add Comment</button>
        </form>
      </div>`;
      pop.appendChild(template);

      // fill commments
      const mycoms = document.querySelector('.comments');
      renderComments(fillcoms, mycoms);

      // Display No of Comments
      const count = document.querySelector('.com-count');
      if (fillcoms.length > 0) {
        count.innerHTML = `(${fillcoms.length})`;
      } else {
        count.innerHTML = '(0)';
      }

      // add comment
      const comBtn = document.querySelector('#submit');
      const inp = document.querySelector('#name');
      const text = document.querySelector('#areatext');
      addComments(comBtn, inp, text, currMovie[0].id);

      // close pop up
      const close = document.querySelector('.closeBtn > i');
      close.addEventListener('click', () => {
        pop.classList.add('inactive');
        body.classList.remove('noflow');
      });
    });
  });
};

export default popup;