# Sort Numbers : use an array method to sort numbers

<!-- BEGIN OF THE DOCS -->

Sorts an array of numbers that will move all zeros in the `arr` to the end will preserve the order of the other elements

Returns a new array without modifying the original array.

Does not need to support: NaN, Infinity, -Infinity.

- ***

  **Returns**: <code>Array.&lt;number&gt;</code> - A new array with the same numbers, but sorted leaving zeros at the end.

| Param | Type                              | Default         | Description                   |
| ----- | --------------------------------- | --------------- | ----------------------------- |
| [arr] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | The array of numbers to sort. |

# Example

```js
moveZeros([0, 2, 0, 0, 3, 2, 1, 3]); // -> [2, 3, 2, 1, 3, 0, 0, 0]

moveZeros([-1, 0, 2, 0, 1]); // -> [-1, 2, 1, 0, 0]
```

<!-- END DOCS -->

## Strategy

I chose to used array methods to solve this challenge because its interesting to see how a function will call out an specific variable to be separate it from the others and be send out to the end of the array

---

## Implementation

There were a few tricky and hard things I had to figure out:

- the `var` Get the current value of the first element in the set of matched elements or set the value of every matched element.
  ([api.query](https://api.jquery.com/val/))
- The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
  ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))

---

## Use Cases

You could use this array to sort items in a shopping application from least to most expensive:

We could use this array to sort items in a raffle or exam results were we sort the students that have the less amount of points starting from zero

```js
const students = [
  { name: "Patrick Hernandez", result: 0 },
  { name: "Aldair Rodriguez", result: 2 },
  { name: "Hallow White", result: 0 },
];
const results = students.map((student) => student.result);
const sortedResults = sortNumbers(results);
const resultStrings = sortedResults.map((result) => `${result}.0 €`);
console.log(resultStrings); // ['2', '0', '0']
```

---

## Inspiration

I remember this example from last week exercises from ([Edabit])(https://edabit.com/challenges)
