/**
 * Sorts an array of numbers that will move all zeros
 * in the `arr` to the end will preserve the order of the other elements.
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arr=[]] - The array of numbers zeros to sort.
 * @returns {number[]} A new array with the same numbers, but sorted with zeros at the end.
 * @example
 *
 * moveZeros([0, 2, 0, 0, 3, 2, 1, 3]);
 * // -> [2, 3, 2, 1, 3, 0, 0, 0]
 *
 * @example
 * moveZeros([-1, 0, 2, 0, 1]);
 * // -> [-1, 2, 1, 0, 0]
 */

export const moveZeros = (arr = []) => {
  // I created a copy of the argument to avoid side-effects.
  const copiedArray = [...arr];
  // return the copiedArray and sorted array of numbers.
  return copiedArray
    .filter((val) => val !== 0)
    .concat(copiedArray.filter((val) => val === 0));
};
