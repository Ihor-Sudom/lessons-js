
import getSquare from './getMinSquaredNumber';

it('should get square of min number', () => {
  const result = getSquare([3, 4, 9, -8, -6]);
  expect(result).toEqual(9);
});