import { arrayIntersection } from './intersection.js';

describe('Intersect the elements that are equal and return them in a new array', () => {
  describe('testing default parameters', () => {
    it('an object literal throw a TypeError', () => {
      expect(() => arrayIntersection({})).toThrow('The arguments must be arrays');
    });
    it('string primitive type Trow a TypeError', () => {
      expect(() => arrayIntersection('hello')).toThrow('The arguments must be arrays');
    });
    it('Without arguments Trow an Error', () => {
      expect(() => arrayIntersection()).toThrow('Must pas two arrays to intercept the values');
    });
    it('Add only one parameter Throw an Error', () => {
      expect(() => arrayIntersection([1, 2])).toThrow(
        'Must pas two arrays to intercept the values'
      );
    });
  });
  describe('With numbers', () => {
    it('both arrays with the same length', () => {
      expect(arrayIntersection([2, 5, 8, 4, 3], [1, 3, 7, 5, 8])).toEqual([5, 8, 3]);
    });
    it('The second argument with less elements', () => {
      expect(arrayIntersection([2, 5, 8, 4, 3], [2, 8]));
    });
    it('Negative and positive numbers', () => {
      expect(arrayIntersection([2, -5, -8, 4, -3], [2, -8])).toEqual([2, -8]);
    });
  });
  describe('Any type of elements', () => {
    it('boolean', () => {
      expect(arrayIntersection([true, false], [true])).toEqual([true]);
    });
    it('null and undefined', () => {
      expect(arrayIntersection([undefined], [null])).toEqual([]);
    });
    it('strings', () => {
      expect(arrayIntersection(['hello', ' bye'], ['hello'])).toEqual(['hello']);
    });
    it('all primitive', () => {
      expect(
        arrayIntersection(
          ['hello', 12, true, null, false, undefined],
          ['hello', true, 12, 25, 'bye']
        )
      ).toEqual(['hello', 12, true]);
    });
  });
  describe('side effects', () => {
    it('does not modify the original array', () => {
      const articles1 = ['milk', 'soda'];
      const articles2 = ['soda'];
      arrayIntersection(articles1, articles2);
      expect(articles1).toEqual(['milk', 'soda']);
    });
  });
});
