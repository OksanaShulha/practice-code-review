/** 
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */
 
/// 1. Using Array.prototype.concat() function
/// This can be recursively done using the reduce() method with the concat() method. The following example demonstrates how to recursively deep flatten array with reduce and concat method.
export function flatten(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
const arr = [1, [2, [3, [4]], 5]];
const flattened = flatten(arr);
console.log(flattened);
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/

/// 2. Using Array.prototype.flat() function
/// ECMA 2019 introduced a new method called flat() for recursively flatten an array. It takes the depth of the nested array as a parameter, which is 1 by default. To flatten any depth of a nested array, use the Infinity with the flat() method.
export const arr = ['a', ['b', [['c'], ['d']], 'e']];
const flattened = arr.flat(Infinity);
console.log(flattened);
/*
    Output: ['a', 'b', 'c', 'd', 'e']
*/

/// 3. Using generator function
/// Alternatively, you can write a generator function for deep flatten an array of any depth. The following code example shows how to implement this using the Array.isArray() method.
export function* flatten(arr) {
    for (const val of arr) {
        Array.isArray(val) ? yield* flatten(val) : yield val;
    }
}
const arr = [1, [2, [3, [4]], 5]];
const flattened = [...flatten(arr)];
console.log(flattened);
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/


////// inspired by https://www.techiedelight.com/recursively-flatten-nested-array-javascript/




// const threeDeepFlat = [1, [2, [3, [4]], 5]];
// threeDeepFlat.flat(3);

// const deepFlat = ['a', ['b', [['c'], ['d']], 'e']]
// deepFlat.flat(Infinity);
// ///// inspired by https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/

// const arr = [1, 2, [3, 4, [5, 6]]];
// const flattened = [...flatten(arr, Infinity)];
// // [1, 2, 3, 4, 5, 6]
// ///// inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// ///// The concat() method is used to merge two or more arrays.…
// /// This method does not change the existing arrays, but instead returns a new array. concat() concat(value0) concat(value0,…
// ///The top solution[].concat(...arr) will only work if the level of nested arrays is at most 1.
// function flatten(arr) {		
// 	return [].concat(...arr)  
// }
// ///// inspired by https://edabit.com/challenge/MXChCnzCSBobgY4Ex