import { arrAverage } from './middle-number';
import { reverseArray } from './reverse';
import { sum } from './sum-number';

it('should get middle of numbers', () => {
  const result = arrAverage([2, 5, 3, 2]);
  expect(result).toEqual(3);
});

it('should get middle of numbers', () => {
  const result = arrAverage(56);
  expect(result).toEqual(null);
});

it('should get middle of numbers', () => {
  const result = arrAverage('dfsdf');
  expect(result).toEqual(null);
});

it('should get reverse of array', () => {
  const result = reverseArray([5, 8, 6, 2]);
  expect(result).toEqual([2, 6, 8, 5]);
});

it('should get reverse of array', () => {
  const result = reverseArray(9);
  expect(result).toEqual(null);
});

it('should get reverse of array', () => {
  const result = reverseArray(['a', 'l', 'd']);
  expect(result).toEqual(['d', 'l', 'a']);
});

it('should get sum of array', () => {
  const result = sum([2, 5, 9, 7]);
  expect(result).toEqual(23);
});

it('should get sum of array', () => {
  const result = sum(45);
  expect(result).toEqual(null);
});

it('should get sum of array', () => {
  const result = sum();
  expect(result).toEqual(null);
});