# Split Object

Split an object into an array of objects. Each entry in the array will be one key/value pair from the object.

---

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
/**
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
 */
```

<!-- BEGIN DOCS -->

<a name="splitObject"></a>

## splitObject ⇒ <code>Array</code>

Splits an object into multiple objects with one key/value pair each.
The new objects are returned in an array.

This function has no side-effects, the argument object is not modified

**Returns**: <code>Array</code> - Returns a new array with one entry for each key/value pair.

| Param        | Type                | Default         | Description                               |
| ------------ | ------------------- | --------------- | ----------------------------------------- |
| [toSeparate] | <code>Object</code> | <code>{}</code> | The object to split into key/value pairs. |

**Example**

```js
splitObject({ a: 1, b: 2, c: 3 });
// -> [{ a: 1 }, { b: 2 }, { c: 3 }]
```

**Example**

```js
splitObject({});
// -> []
```

## Strategy
```js
/* iterating until the new string's length is correct

 splitObject = (toSeparate = {}) => 
    1. Check if the argument is object and length should be three.
      a.If it is not an object then it will return  empty array.
      b.else Keep going 
    2. create three new empty object to fill 
    3. iterate as long as with object length
      a. access value using key and store key /value pair into new empty object.keep going 
      b. repeat
    return: Returns a new array with one entry for each key/value pair.
*/
```
## Implementation
```js
/*
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
*/

---

## Use Cases

---


> Docs generated: Thu May 20 2021, 11:07:35 AM

<!-- END DOCS -->
