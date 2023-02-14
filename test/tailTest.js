const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return [2,3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it('should return [6,7] for [5, 6, 7]', () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });

  it('should return [] for [0]', () => {
    assert.deepEqual(tail([0]), []);
  });

  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should not modify the original array', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert.deepEqual(words, ['Yo Yo', 'Lighthouse', 'Labs']);
  });

  it('should return a new array', () => {
    const words = ['Hello', 'LighthouseLab', 'labs'];
    const result = tail(words);
    assert.deepEqual(result, ['LighthouseLab', 'labs']);
  });
});
