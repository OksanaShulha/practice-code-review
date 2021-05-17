/**
 *
 */
export const solutionName = () => {};


/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
 export const arrayDifference = (array = [], values = []) => {
    let returnArray = [...array];
  
    //for all values in array
    for (let i = 0; i < returnArray.length; i++) {
      //check all elements in values
      for (let j = 0; j < values.length; j++) {
        //if they are same remove the element
        if (returnArray[i] === values[j]) {
          returnArray.splice(i, 1);
        }
      }
    }
  
    return returnArray;
  };
  
  console.log(arr
  


//     npm run lint template-solution/solution-name.js
    
//     ////// create txt.file
//     warning: Missing JSDoc block description (jsdoc/require-description) at template-solution\solution-name.js:1:1:
// > 1 | /**
//     | ^
//   2 |  *
//   3 |  */
//   4 | export const arrayDifference = (array = [], values = []) => {


// warning: Missing JSDoc @param "array" declaration (jsdoc/require-param) at template-solution\solution-name.js:1:1:
// > 1 | /**
//     | ^
//   2 |  *
//   3 |  */
//   4 | export const arrayDifference = (array = [], values = []) => {


    
    
//     npm run document template-solution/solution-name.js
//     create md.file

// warning: Missing JSDoc @param "values" declaration (jsdoc/require-param) at template-solution\solution-name.js:1:1:
// > 1 | /**
//     | ^
//   2 |  *
//   3 |  */
//   4 | export const arrayDifference = (array = [], values = []) => {


// warning: Missing JSDoc @returns declaration (jsdoc/require-returns) at template-solution\solution-name.js:1:1:
// > 1 | /**
//     | ^
//   2 |  *
//   3 |  */
//   4 | export const arrayDifference = (array = [], values = []) => {


// warning: 'returnArray' is never reassigned. Use 'const' instead (prefer-const) at template-solution\solution-name.js:5:7:
//   3 |  */
//   4 | expo

