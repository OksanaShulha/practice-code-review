import { deepFlat } from './deepflat.js';


    describe("flattens arrays with different levels of depths", () => {
      describe("default value, array with 1 level of depth", () => {
        it("an emty array", () => {
          const expected = [];
          const received = deepFlat([]);
          expect(received).toEqual(expected);
        });
        it("without any arguments", () => {
          const expected = [];
          const received = deepFlat();
          expect(received).toEqual(expected);
        });
        it("array with numbers", () => {
          const expected = [1, 2, 3, 4, 5];
          const received = deepFlat([1, 2, 3, 4, 5]);
          expect(received).toEqual(expected);
        });
        it("using primitive types", () => {
          const expected = [null, false, 0, NaN, ""];
          const received = deepFlat([null, false, 0, NaN, ""]);
          expect(received).toEqual(expected);
        });
      });
      describe("flattens array with 2 levels of depth", () => {
        it("array with numbers", () => {
          const expected = [0, 1, -1, 2, -2];
          const received = deepFlat([0, [1, -1, 2], -2]);
          expect(received).toEqual(expected);
        });
        it("array with strings", () => {
          const expected = ["a", "b", "c", "!", "e"];
          const received = deepFlat(["a", ["b", "c", "!"], "e"]);
          expect(received).toEqual(expected);
        });
        it("array with different types of items", () => {
          const expected = [null, false, 0, NaN, "e"];
          const received = deepFlat([null, [false], 0, NaN, "e"]);
          expect(received).toEqual(expected);
        });
      });
      describe("flattens array with 3 levels of depth", () => {
        it("array with numbers", () => {
          const expected = [5, 7, 0, 1, -1, 2, -2, 9];
          const received = deepFlat([5, 7, [0, [1, -1, 2], -2], 9]);
          expect(received).toEqual(expected);
        });
        it("array with strings", () => {
          const expected = ["a", "b", "c", "!", "e"];
          const received = deepFlat(["a", ["b", ["c", "!"]], "e"]);
          expect(received).toEqual(expected);
        });
        it("array with different types of items", () => {
          const expected = [true, null, false, 0, NaN, "e"];
          const received = deepFlat([true, [null, [false]], 0, NaN, "e"]);
          expect(received).toEqual(expected);
        });
      });
    });