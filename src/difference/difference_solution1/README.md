<!-- BEGIN DOCS -->

# Difference: finds the numbers that are in the first array but not in the second array

<a name="arrayDifference"></a>

## arrayDifference ⇒ <code>Array</code>

This function creates an array of values that are in the first array,
but not not in the second array.
Repeated values are not duplicated in the return value,
and the order of result values are determined by the first array.
**Note:** This function returns a new array, and has no side-effects.
**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param                      | Type               | Default         | Description            |
| -------------------------- | ------------------ | --------------- | ---------------------- |
| [arrayToFindTheDifference] | <code>Array</code> | <code>[]</code> | The array to inspect.  |
| [arrayToCompare]           | <code>Array</code> | <code>[]</code> | The values to exclude. |

**Example**

```js
difference([2, 1], [2, 3]); //  [1]
```

**Example**

```js
difference([1, 2, 1], [2, 3]); //  [1]
```

> Docs generated: Wed May 19 2021, 1:46:52 AM
>
> ## Strategy

## A additive approach is chosen to find the difference between two arrays. Starting from an empty array and added all the different elements to the array.

## Implementation

Solution starts with an empty array .
Since the elements of first array which are not in the second array are wanted, all the elements in the first array is searched one by one.
Each element is checked if they are not in the second array and if they are not already added to the new array, which will be returned.
If the conditions are met the value of the current element is added to the return array.
Lastly the new array, which started empty and added elements of first array if they meet the condition, is returned.

## Use Cases

This could be used find different between a wish list and a shopping cart of an online shopping web page to make suggestions or this could be used find delete items from a wish list when they are buyed from an online shopping web page:

```js
const whishList = [
  { name: 'teddy bear', price: 3 },
  { name: 'milk', price: 1 },
  { name: 'light bulb', price: 2 },
];
const shoppingCart = [
  { name: 'teddy bear', price: 3 },
  { name: 'milk', price: 1 },
];
const stillWishedItems = arrayDifference(whishList, shoppingCart);
```

---

## Inspiration

[This article from w3schools.com](https://www.w3schools.com/jsref/jsref_includes_array.asp) help me to find the array methods `.contains()`.

<!-- END DOCS -->
