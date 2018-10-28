const assert = require('assert');
const recursion = require('../recursion');

describe('recursion', () => {
  it('should return array', () => {
    const result = recursion(
      {
        value: 100,
        left: {
          value: 90,
          left: {
            value: 70,
          },
          right: {
            value: 99,
          },
        },
        right: {
          value: 120,
          left: {
            value: 110,
          },
          right: {
            value: 130,
          },
        },
      },
    );

    assert.deepEqual(
      result,
      [[100], [90, 120], [70, 99, 110, 130]],
    );
  });
});

it('should return array', () => {
  const result = recursion(
    {
      value: 'w',
      left: {
        value: 'r',
        right: {
          value: 'm',
        },
      },
      right: {
        value: 'b',
        left: {
          value: 'l',
        },
      },
    },
  );

  assert.deepEqual(
    result,
    [['w'], ['r', 'b'], ['m', 'l']],
  );
});
