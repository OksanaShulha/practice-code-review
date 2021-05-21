import { sortArrays } from "./sort-numbers-zeros";

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/
export const moveZeros = (arr) => {
  // I created a copy of the argument to avoid side-effects.
  const copiedArray = [...arr];
  // return the copiedArray and sorted array of numbers.
  return copiedArray
    .filter((val) => val !== 0)
    .concat(copiedArray.filter((val) => val === 0));
};

console.log(moveZeros([0, 2, 0, 0, 3, 2, 1, 3])); // [2,3,2,1,3,0,0,0]
