/**
 * This function creates an array of values that are in the first array,
 * but not not in the second array.
 *
 * Repeated values are not duplicated in the return value,
 * and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [arrayToFindTheDifference=[]] - The array to inspect.
 * @param {Array} [arrayToCompare=[]] - The values to exclude.
 *
 * @returns {Array} Returns the new array of filtered values.
 *
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
export const arrayDifference = (
  arrayToFindTheDifference = [],
  arrayToCompare = [],
) => {
  // ensure that a new array is created
  const returnArray = [];
  // ensure that every element in the array is checked
  for (let i = 0; i < arrayToFindTheDifference.length; i++) {
    const element = arrayToFindTheDifference[i];
    // ensure that the current value is not in the second array
    // and it is not already in the returned array
    if (!arrayToCompare.includes(element) && !returnArray.includes(element)) {
      returnArray.push(element);
    }
  }
  // ensure that the new array is returned
  return returnArray;
};
