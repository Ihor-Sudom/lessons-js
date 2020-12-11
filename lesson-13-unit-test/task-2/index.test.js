
import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get square of numbers', () => {
  const result = getSquaredArray([3, 4, 9]);
  expect(result).toEqual([9, 16, 81]);
});

it('should keep all odd numbers', () => {
  const result = getOddNumbers([3, 4, 9, 7, 8]);
  expect(result).toEqual([3, 7]);
});

it('should get sum of numbers', () => {
  const result = getSum(4, 5);
  expect(result).toEqual(9);
});