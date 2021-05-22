import { deepFlat } from './deepflat.js';

describe('flattens arrays with different levels of depths', () => {
  describe('default value, array with 1 level of depth', () => {
    it('an empty array', () => {
      const expected = [];
      const received = deepFlat([]);
      expect(received).toEqual(expected);
    });
    it('without any arguments', () => {
      const expected = [];
      const received = deepFlat();
      expect(received).toEqual(expected);
    });
    it('array with numbers', () => {
      const expected = [1, 2, 3, 4, 5];
      const received = deepFlat([1, 2, 3, 4, 5]);
      expect(received).toEqual(expected);
    });
    it('using primitive types', () => {
      const expected = [false, '', NaN, 0, null];
      const received = deepFlat([false, '', NaN, 0, null]);
      expect(received).toEqual(expected);
    });
  });
  describe('flattens array with 2 levels of depth', () => {
    it('array with numbers', () => {
      const expected = [1, 2, 3, 4, 5];
      const received = deepFlat([1, [2, 3, 4], 5]);
      expect(received).toEqual(expected);
    });
    it('array with strings', () => {
      const expected = ['1', '2', '3', '4', '5'];
      const received = deepFlat(['1', ['2', '3', '4'], '5']);
      expect(received).toEqual(expected);
    });
    it('using primitive types', () => {
      const expected = [false, '', NaN, 0, null];
      const received = deepFlat([false, '', NaN, [0, null]]);
      expect(received).toEqual(expected);
    });
  });
  describe('flattens array with 3 levels of depth', () => {
    it('array with numbers', () => {
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const received = deepFlat([1, 2, [3, [4, 5, 6], 7], 8, 9]);
      expect(received).toEqual(expected);
    });
    it('array with strings', () => {
      const expected = ['1', '2', '3', '4', '5'];
      const received = deepFlat(['1', ['2', ['3', '4']], '5']);
      expect(received).toEqual(expected);
    });
    it('using primitive types', () => {
      const expected = [false, '', NaN, 0, null];
      const received = deepFlat([false, ['', [NaN], 0], null]);
      expect(received).toEqual(expected);
    });
  });
});
