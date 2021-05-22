# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
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
```

> Docstring is adapted from [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)

## Strategy
Use a flat method.

## Implementation
Declare a new function with empty array.
Create a new array to avoid side-effects.
Return the new array with a "depth" parameter Infinity, so it can pass in any levels of nesting. 

## Use Cases
const nested = [[ ':package:', ':package:' ], [ ':package:' ]];
const flattened = nested.flat();
console.log(flattened);
[ ':package:', ':package:',':package:' ]

## Inspiration

https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

For more difficult solutions:
https://www.techiedelight.com/recursively-flatten-nested-array-javascript/

