import { deepFlat } from './deepflat.js';

let result = deepFlat([1, [2, [3, [4]], 5]]);
console.log(result);