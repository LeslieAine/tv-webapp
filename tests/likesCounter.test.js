const likesCounter = document.querySelector('.likes');

describe('likesCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<p class="likes like">0</p>';
  });

  test('should return the correct number of likes', () => {
    expect(likesCounter()).toBe(1);
  });

  test('should return 0 if there are no likes', () => {
    document.body.innerHTML = '';
    expect(likesCounter()).toBe(0);
  });
});
