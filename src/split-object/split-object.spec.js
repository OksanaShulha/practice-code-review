import { splitObject } from "./split-object.js";

describe("Splits an object into multiple objects", () => {
  it("expect an empty array if no arguments is passed", () => {
    expect(splitObject()).toEqual([]);
  });

  it("expect empty array if type of argument is passed object", () => {
    expect(splitObject(123)).toEqual([]);
  });

  it("expect empty array if argument is passed string", () => {
    // eslint-disable-next-line spellcheck/spell-checker
    expect(splitObject("mayuri")).toEqual([]);
  });

  it("expect empty array if argument is passed boolean value", () => {
    expect(splitObject(true)).toEqual([]);
  });

  it("expect empty array if argument is array", () => {
    expect(splitObject([])).toEqual([]);
  });

  it("expect empty array if argument length is more than or less than three", () => {
    expect(splitObject({ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 })).toEqual([]);
  });

  it("function should return array", () => {
    expect(splitObject({ a: 1, b: 2 }, { c: 3 })).toEqual([]);
  });

  it("function should return with new array with one entry for each key/value pair.", () => {
    expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);
  });
}); // end of describe
