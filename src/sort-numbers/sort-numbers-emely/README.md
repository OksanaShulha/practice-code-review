<!-- BEGIN DOCS -->

<a name="moveZeros"></a>

## moveZeros ⇒ <code>Array.&lt;number&gt;</code>

Sorts an array of numbers that will move all zeros
in the `arr` to the end will preserve the order of the other elements.
Returns a new array without modifying the original array.

Does not need to support: NaN, Infinity, -Infinity.

**Returns**: <code>Array.&lt;number&gt;</code> - A new array with the same numbers, but sorted with zeros at the end.

| Param | Type                              | Default         | Description                         |
| ----- | --------------------------------- | --------------- | ----------------------------------- |
| [arr] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | The array of numbers zeros to sort. |

**Example**

```js
moveZeros([0, 2, 0, 0, 3, 2, 1, 3]);
// -> [2, 3, 2, 1, 3, 0, 0, 0]
```

**Example**

```js
moveZeros([-1, 0, 2, 0, 1]);
// -> [-1, 2, 1, 0, 0]
```

> Docs generated: Thu May 20 2021, 12:17:59

<!-- END DOCS -->
