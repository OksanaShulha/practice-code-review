import { arrayDifference } from './difference.js';

describe('extreme cases', () => {
  describe('empty inputs', () => {
    it('should return empty for an empty array and default values', () => {
      const actual = arrayDifference([]);
      expect(actual).toEqual([]);
    });
    it('should return empty for an empty array and an empty values', () => {
      const actual = arrayDifference([], []);
      expect(actual).toEqual([]);
    });
    it('should return empty for an empty array', () => {
      const actual = arrayDifference([], [1, 2, 1]);
      expect(actual).toEqual([]);
    });
    it('should return empty for default values', () => {
      const actual = arrayDifference();
      expect(actual).toEqual([]);
    });
  });
  describe('repeating elements', () => {
    it('should not contain repeated elements from the array', () => {
      const actual = arrayDifference([1, 2, 1], [2, 3]);
      expect(actual).toEqual([1]);
    });
    it('should not contain repeated elements from the values', () => {
      const actual = arrayDifference([1, 2, 1], [2, 2, 3]);
      expect(actual).toEqual([1]);
    });
  });
});

describe('normal cases', () => {
  it('should return [1]', () => {
    const actual = arrayDifference([2, 1], [2, 3]);
    expect(actual).toEqual([1]);
  });
  it('should return [2]', () => {
    const actual = arrayDifference([2, 1], [1, 3, 4]);
    expect(actual).toEqual([2]);
  });
  it('should include [1]', () => {
    const actual = arrayDifference([3, 2, 4, 1], [2, 3]);
    expect(actual.includes(1)).toEqual(true);
  });
  it('should include [4]', () => {
    const actual = arrayDifference([3, 2, 4, 1], [2, 3]);
    expect(actual.includes(4)).toEqual(true);
  });
  it('should not include [4]', () => {
    const actual = arrayDifference([3, 2, 4, 1], [2, 3, 4, 4]);
    expect(!actual.includes(4)).toEqual(true);
  });
  describe('have no side effects', () => {
    it('should not have side effects on the array', () => {
      const actual = [1, 2, 3];
      arrayDifference(actual, [2, 3]);
      expect(actual).toEqual([1, 2, 3]);
    });
    it('should not have side effects on the values', () => {
      const actual = [2, 3];
      arrayDifference([1, 2, 3], actual);
      expect(actual).toEqual([2, 3]);
    });
  });
});
