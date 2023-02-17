import moviesCounter from '../src/modules/counters/moviesCounter.js';

describe('moviesCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <li class="list"></li>
          <li class="list"></li>
          <li class="list"></li>
        `;
  });

  test('should return the correct number of movies', () => {
    expect(moviesCounter()).toBe(3);
  });

  test('should return 0 if there are no moviess', () => {
    document.body.innerHTML = '';
    expect(moviesCounter()).toBe(0);
  });

  test('returns the correct count after some movies are added or removed', () => {
    const movieList = document.createElement('li');
    movieList.classList.add('list');
    document.body.appendChild(movieList);
    expect(moviesCounter()).toBe(4);

    document.querySelector('.list').remove();
    const newCount = moviesCounter();
    expect(newCount).toBe(3);
  });

  test(' returns the correct count even if some movies have different class names', () => {
    document.body.innerHTML = `
            <li class="list"></li>
            <li class="list"></li>
            <li class="other-class"></li>
            `;
    expect(moviesCounter()).toBe(2);
  });

  test('returns the correct count even if the movies are inside nested elements', () => {
    document.body.innerHTML = `
            <div class="container">
                <li class="list"></li>
                <li class="list"></li>
                <li class="list"></li>
            </div>
            `;

    expect(moviesCounter()).toBe(3);
  });

  test('returns the correct count even if the movies have multiple classes', () => {
    document.body.innerHTML = `
                <li class="list movie"></li>
                <li class="list special"></li>
                <li class="list ordinary"></li>
            `;

    expect(moviesCounter()).toBe(3);
  });
});