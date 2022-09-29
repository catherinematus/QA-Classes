/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sorter } from "../src/sorter";
import { expect } from "@jest/globals";
import { EMPTY_ARRAY_ERROR_MESSAGE } from "../src/constants";

let sorter: any = null;

describe("Number sorter tests", () => {
  beforeAll(() => {
    sorter = new Sorter();
  });

  test("Should correctly sort positive numbers", () => {
    expect(sorter.numbersHandler([5, 12, 3, 1])).toStrictEqual([1, 3, 5, 12]);
  });

  test("Should correctly sort negative numbers", () => {
    expect(sorter.numbersHandler([-5, -100, -1, -16])).toStrictEqual([-100, -16, -5, -1]);
  });

  test("Should correctly sort negative and positive numbers", () => {
    expect(sorter.numbersHandler([5, -99, 0])).toStrictEqual([-99, 0, 5]);
  });

  test("Should correctly handle an empty array", () => {
    expect(() => sorter.numbersHandler([])).toThrow(Error(EMPTY_ARRAY_ERROR_MESSAGE));
  });

  test("Should delete duplicates from the sorted array", () => {
    expect(sorter.numbersHandler([5, -73, 0, 122, 5])).toStrictEqual([-73, 0, 5, 122]);
  });

  afterAll(() => {
    sorter = null;
  });
})

describe("Strings sorter tests", () => {
  beforeAll(() => {
    sorter = new Sorter();
  });

  test("Should sort strings alphabetically", () => {
    expect(sorter.stringsHandler(["abc", "cba", "block"])).toEqual(["abc", "block", "cba"]);
  });

  test("Should sort numeric strings alphabetically", () => {
    expect(sorter.stringsHandler(["10", "1", "0"])).toEqual(["0", "1", "10"]);
  });

  test("Should sort numeric and alphabetic strings alphabetically", () => {
    expect(sorter.stringsHandler(["10", "1", "teach"])).toEqual(["1", "10", "teach"]);
  });

  test("Should sort negative numeric strings alphabetically", () => {
    expect(sorter.stringsHandler(["-10", "1", "0"])).toEqual(["-10", "0", "1"]);
  });

  test("Should correctly handle an empty array", () => {
    expect(() => sorter.stringsHandler([])).toThrow(Error(EMPTY_ARRAY_ERROR_MESSAGE));
  });

  test("Should delete duplicates in the sorted array", () => {
    expect(sorter.stringsHandler(["teach", "me", "skills", "me"])).toEqual(["me", "skills", "teach"]);
  });

  afterAll(() => {
    sorter = null;
  });
})
