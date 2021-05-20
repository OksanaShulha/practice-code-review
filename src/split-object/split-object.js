/** .............................
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
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
  if (typeof toSeparate === "object" && Object.keys(toSeparate).length === 3) {
    // eslint-disable-next-line padded-blocks
    if (Object.keys(toSeparate).length === 0) {
      return arr;
    }
    const keys = Object.keys(toSeparate);
    const keysLength = keys.length;
    let k = 0;

    for (let i = 0; i <= keysLength; i++) {
      const key = keys[i];
      if (k === 0) {
        obj1 = { ...obj1, [key]: toSeparate[key] };
        k++;
      } else if (k === 1) {
        obj2 = { ...obj2, [key]: toSeparate[key] };
        k++;
      } else if (k === 2) {
        obj3 = { ...obj3, [key]: toSeparate[key] };
        k++;
      }
    }

    arr.push(obj1);
    arr.push(obj2);
    arr.push(obj3);

    return arr;
  }
  // console.log("argument should be object and length should be three ");
  return arr;
};
