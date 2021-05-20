import { arrayDifference as difference } from './difference.js';

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

console.log(difference([1, 2, 1], [2, 3])); //  [1]

console.log(difference([2, 1], [1, 3, 4])); //  [1]
