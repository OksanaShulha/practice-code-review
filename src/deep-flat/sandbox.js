import { deepFlat } from './deepflat.js';

const testArray = [1, [2, [3, [4]], 5]];
console.log(deepFlat(testArray)); // Output: [1, 2, 3, 4, 5]
