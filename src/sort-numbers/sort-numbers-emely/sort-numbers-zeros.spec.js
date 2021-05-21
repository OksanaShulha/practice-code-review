/* eslint-disable quotes */
import { moveZeros } from "./sort-numbers-zeros.js";

describe("moveZeros at the end of the array of numbers", () => {
  describe("sorts positive numbers", () => {
    it("whole numbers", () => {
      const expected = [1, 3, 8, 0, 0, 0, 0];
      const received = moveZeros([0, 1, 0, 3, 0, 8, 0]);
      expect(received).toEqual(expected);
    });
    it("decimal numbers", () => {
      const expected = [1.3, 4.5, 0.6, 5.6, 7.4, 0, 0, 0, 0];
      const received = moveZeros([1.3, 4.5, 0.6, 0, 5.6, 0, 0, 7.4, 0]);
      expect(received).toEqual(expected);
    });
    it("mixed whole and decimal numbers", () => {
      const expected = [1, 2.3, 3.8, 5.4, 0, 0, 0, 0, 0];
      const received = moveZeros([0, 1, 0, 2.3, 0, 0, 3.8, 0, 5.4]);
      expect(received).toEqual(expected);
    });
  });
  describe("sorts negative numbers", () => {
    it("whole numbers", () => {
      const expected = [-2, -3, -7, -16, -12, 0, 0, 0, 0];
      const received = moveZeros([-2, 0, -3, 0, -7, 0, 0, -16, -12]);
      expect(received).toEqual(expected);
    });
    it("decimal numbers", () => {
      const expected = [-1.2, -5.3, -2.9, -7.5, 0, 0, 0, 0];
      const received = moveZeros([0, -1.2, 0, 0, -5.3, 0, -2.9, -7.5]);
      expect(received).toEqual(expected);
    });
    it("mixed whole and decimal numbers", () => {
      const expected = [-6, -3.5, -6.7, -4, -5.9, -1, 0, 0, 0, 0];
      const received = moveZeros([0, -6, 0, -3.5, -6.7, 0, 0, -4, -5.9, -1]);
      expect(received).toEqual(expected);
    });
  });
  describe("sorts mixed positive and negative numbers", () => {
    it("whole numbers", () => {
      const expected = [2, -4, 6, 7, -3, 0, 0, 0, 0];
      const received = moveZeros([0, 2, 0, -4, 6, 7, 0, 0, -3]);
      expect(received).toEqual(expected);
    });
    it("decimal numbers", () => {
      const expected = [-2.4, 6.4, -7.4, 7.89, -5.2, 0, 0, 0, 0];
      const received = moveZeros([-2.4, 6.4, 0, 0, -7.4, 0, 7.89, -5.2, 0]);
      expect(received).toEqual(expected);
    });
    it("mixed whole and decimal numbers", () => {
      const expected = [-3.4, 5, 2, -6.7, 9.0, -0.6, 0, 0, 0];
      const received = moveZeros([-3.4, 0, 5, 0, 2, -6.7, 0, 9.0, -0.6]);
      expect(received).toEqual(expected);
    });
  });
  describe("sorts between strings elements", () => {
    it("short strings", () => {
      const expected = ["a", "b", "c", "d", 0, 0, 0, 0, 0];
      const received = moveZeros(["a", 0, 0, "b", 0, "c", 0, "d", 0]);
      expect(received).toEqual(expected);
    });
    it("longer strings", () => {
      // eslint-disable-next-line spellcheck/spell-checker
      const expected = ["abcde", "abcdefghi", "jklmnopq", 0, 0, 0, 0, 0, 0];
      const received = moveZeros([
        0,
        "abcde",
        0,
        0,
        // eslint-disable-next-line spellcheck/spell-checker
        "abcdefghi",
        0,
        // eslint-disable-next-line spellcheck/spell-checker
        "jklmnopq",
        0,
        0,
      ]);
      expect(received).toEqual(expected);
    });
  });
  describe("sorts zeros between boolean elements", () => {
    it("with logical operators", () => {
      const expected = [null, 2, NaN, 34, false, 0, 0, 0, 0];
      const received = moveZeros([null, 0, 2, NaN, 0, 34, 0, false, 0]);
      expect(received).toEqual(expected);
    });
  });
  describe("has no side-effects", () => {
    it("returns a new array", () => {
      const arg = [];
      const returned = moveZeros(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it("does not modify the argument", () => {
      const arg = [3, 2, 1];
      moveZeros(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
