import { deepFlat } from './deepflat.js';

describe('flattens array', () => {
    it('should flatten an array', () => {
let result = deepFlat([1,2,3,4,5]);
    });




//// use debugger

    it('passing one argument', () => {
      expect(sumTwoNumbers(2)).toEqual(2);
    });
  });
  describe('passing only numbers', () => {
    it('passing positive numbers', () => {
      expect(sumTwoNumbers(2, 2)).toEqual(4);
    });
    it('add negative numbers', () => {
      expect(sumTwoNumbers(-5500, -152)).toEqual(-5652);
    });
  });
});
