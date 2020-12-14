
import { getEvenNumbers } from './index'

it('17 equally 17', () => {
  expect(17).toEqual(17);
});

it('18 not equally 17', () => {
  expect(17).not.toEqual(17);
});

it('should get all even numbers', () => {
  const result = getEvenNumbers([3, 4, 9, 7, 8]);
  expect(result).toEqual([4, 9, 8]);
});