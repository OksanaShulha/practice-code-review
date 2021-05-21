/**
 * Converts a nested array into a single array with no nesting.
 *
 * It returns a new array and there are no side-effects.
 *
 * @param {Array} [array=[]] - The array to flatten.
 *
 * @returns {Array} Returns the new flattened array.
 *
 * @example
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 * @example
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

export const deepFlat = (array = []) => {
  const newArray = [...array];
  return newArray.flat(Infinity);
};
// To avoid a side-effects a new is created. The depth parameter is 3.
// The new flattened array is returned.
