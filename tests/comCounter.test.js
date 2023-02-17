import comCounter from '../src/modules/counters/comCounter.js';

describe('comCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<li class="com-item"></li>';
  });

  test('should return the correct number of comments', () => {
    expect(comCounter()).toBe(1);
  });

  test('should return 0 if there are no comments', () => {
    document.body.innerHTML = '';
    expect(comCounter()).toBe(0);
  });

  test('returns the correct count after some comments are added or removed', () => {
    const commItem = document.createElement('li');
    commItem.classList.add('com-item');
    document.body.appendChild(commItem);
    expect(comCounter()).toBe(2);

    document.querySelector('.com-item').remove();
    const newCount = comCounter();
    expect(newCount).toBe(1);
  });

  test('returns the correct count even if the comments have multiple classes', () => {
    document.body.innerHTML = `
            <li class="com-item com"></li>
            <li class="com-item highlighted"></li>
            <li class="com-item transparent"></li>
            `;
    expect(comCounter()).toBe(3);
  });

  test('returns the correct count even if comments have an id', () => {
    document.body.innerHTML = `
            <li class="com-item" id="first"></li>
            <li class="com-item" id="second"></li>
            <li class="com-item" id="third"></li>`;
    expect(comCounter()).toBe(3);
  });

  test('returns the correct count even if links have nested anchor tags', () => {
    document.body.innerHTML = `
            <li class="com-item" id="first"><a href="/"></a></li>
            <li class="com-item" id="second"><a href="/"></a></li>
            <li class="com-item" id="third"><a href="/"></a></li>`;
    expect(comCounter()).toBe(3);
  });
});