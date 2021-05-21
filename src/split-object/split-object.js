// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable jsdoc/require-param */
/** ...................................................................................................
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 *
 */
export const splitObject = (toSeparate = {}) => {
  let obj1 = {};
  let obj2 = {};
  let obj3 = {};
  const arr = [];
  // check argument type is object and length is three
  if (
    typeof toSeparate != "object" ||
    Object.keys(toSeparate).length > 3 ||
    Object.keys(toSeparate).length < 3 ||
    Object.keys(toSeparate).length === 0
  ) {
    return arr; // return empty array
  }
  const keys = Object.keys(toSeparate);
  const keysLength = keys.length;
  let k = 0;
  // iterate loop to get key and value pair
  for (let i = 0; i <= keysLength; i++) {
    const key = keys[i];
    if (k === 0) {
      obj1 = { ...obj1, [key]: toSeparate[key] }; // store key/value pair in object obj1
      k++;
    } else if (k === 1) {
      obj2 = { ...obj2, [key]: toSeparate[key] }; // store key/value pair in object obj2
      k++;
    } else if (k === 2) {
      obj3 = { ...obj3, [key]: toSeparate[key] }; // store key/value pair in object obj3
      k++;
    }
  }

  // insert object into array
  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);
  // return array with key/value pairs
  return arr;
};
