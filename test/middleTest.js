const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('should return [7] for [2, 4, 5, 6, 7, 8, 9, 0, 7]', () => {
    assert.deepEqual(middle([2, 4, 5, 6, 7, 8, 9, 0, 7]), [7]);
  });

  it('should return [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
