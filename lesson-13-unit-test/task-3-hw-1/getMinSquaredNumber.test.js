
import getSquare from './getMinSquaredNumber';

it('should get square of empty array', () => {
  const result = getSquare([]);
  expect(result).toEqual(Infinity);
});

it('should get square of string', () => {
  const result = getSquare('hello');
  expect(result).toEqual(NaN);
});

it('should get square of min number', () => {
  const result = getSquare([3, 4, 9, -8, -6]);
  expect(result).toEqual(9);
});