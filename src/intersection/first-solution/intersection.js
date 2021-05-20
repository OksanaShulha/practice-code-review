/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [firstArr=[]] - First array to be compared for repeated values.
 * @param {Array} [secondArr=[]] - Second array to be compared for repeated values.
 * @returns {Array} Returns the new array with only intersected values.
 */

export const arrayIntersection = (firstArr = [], secondArr = []) => {
  let newArrayIntersected = [];
  // Test if the arguments are arrays and make sure that arguments are passed
  if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
    throw new TypeError('The arguments must be arrays');
  } else if (!firstArr.length || !secondArr.length) {
    throw new Error('Must pas two arrays to intercept the values');
  } else {
    // test if arrays have the same values, return only the values matched
    newArrayIntersected = [...new Set(firstArr.filter((x) => secondArr.includes(x)))];
  }
  return newArrayIntersected;
};
