import likesCounter from '../src/modules/counters/likesCounter.js';

describe('likes Counter', () => {
  let likesArray = [{}, {}, {}];
  beforeEach(() => {
    document.body.innerHTML = '<p class="likes like">0</p>';
  });

  test('should return the correct number of likes', () => {
    expect(likesCounter(likesArray)).toBe(3);
  });

  test('should return 0 if there are no likes', () => {
    likesArray = [];
    expect(likesCounter(likesArray)).toBe(0);
  });
});
