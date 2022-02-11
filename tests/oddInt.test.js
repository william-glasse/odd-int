const oddInt = require('../src/oddInt');

describe('Odd Int', () => {
  test('should return the number which occurs an odd number of times', () => {
    expect(oddInt([1, 1, 3])).toBe(3);
  });
  test('should return the one that appears an odd number of times.', () => {
    expect(oddInt([0, 1, 0, 1, 0])).toBe(0);
  });
  test('should return the one that appears an odd number of times.', () => {
    expect(oddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
