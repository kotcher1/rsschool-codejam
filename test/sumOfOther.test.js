const assert = require('assert');
const sumOfOther = require('../sumOfOther');

describe('sumOfOther', () => {
  it('should calc sum of others', () => {
    assert.deepEqual(
      sumOfOther([2, 3, 4, 1]),
      [8, 7, 6, 9],
    );
  });

  it('should calc sum of others', () => {
    assert.deepEqual(
      sumOfOther([0, 8, 9, 12]),
      [29, 21, 20, 17],
    );
  });

  it('should calc sum of others', () => {
    assert.deepEqual(
      sumOfOther([]),
      [],
    );
  });

  it('should calc sum of others', () => {
    assert.deepEqual(
      sumOfOther([-1]),
      [0],
    );
  });

  it('should calc sum of others', () => {
    assert.deepEqual(
      sumOfOther([-1, 6, 7, -13]),
      [0, -7, -8, 12],
    );
  });
});
