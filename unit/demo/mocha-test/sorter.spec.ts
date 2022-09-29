/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "assert";
import { expect } from "chai";
import { EMPTY_ARRAY_ERROR_MESSAGE } from "../src/constants";
import { Sorter } from "../src/sorter";

let sorter: any = null;

const SORTING_ERROR_MESSAGE = "Array is sorted incorrectly!";

describe("Number sorter tests", () => {
  before(() => {
    sorter = new Sorter();
  });

  it("Should correctly sort positive numbers", () => {
    assert.deepEqual(sorter.numbersHandler([5, 12, 3, 1]), [1, 3, 5, 12], SORTING_ERROR_MESSAGE)
  });

  it("Should correctly sort negative numbers", () => {
    assert.deepEqual(sorter.numbersHandler([-5, -100, -1, -16]), [-100, -16, -5, -1], SORTING_ERROR_MESSAGE)
  });

  it("Should correctly sort negative and positive numbers", () => {
    assert.deepEqual(sorter.numbersHandler([5, -99, 0]), [-99, 0, 5], SORTING_ERROR_MESSAGE)
  });

  it("Should correctly handle an empty array", () => {
    assert.throws(() => sorter.numbersHandler([]), Error(EMPTY_ARRAY_ERROR_MESSAGE), "Error messages are not the same!")
  });

  it("Should delete duplicates from the sorted array", () => {
    assert.deepEqual(sorter.numbersHandler([5, -73, 0, 122, 5]), [-73, 0, 5, 122], SORTING_ERROR_MESSAGE)
  });

  after(() => {
    sorter = null;
  });
})

describe("Strings sorter tests", () => {
  before(() => {
    sorter = new Sorter();
  });

  it("Should sort strings alphabetically", () => {
    expect(sorter.stringsHandler(["abc", "cba", "block"])).to.be.deep.equal(["abc", "block", "cba"], SORTING_ERROR_MESSAGE);
  });

  it("Should sort numeric strings alphabetically", () => {
    expect(sorter.stringsHandler(["10", "1", "0"])).to.be.deep.equal(["0", "1", "10"], SORTING_ERROR_MESSAGE);
  });

  it("Should sort numeric and alphabetic strings alphabetically", () => {
    expect(sorter.stringsHandler(["10", "1", "teach"])).to.be.deep.equal(["1", "10", "teach"], SORTING_ERROR_MESSAGE);
  });

  it("Should sort negative numeric strings alphabetically", () => {
    expect(sorter.stringsHandler(["-10", "1", "0"])).to.be.deep.equal(["-10", "0", "1"], SORTING_ERROR_MESSAGE);
  });

  it("Should correctly handle an empty array", () => {
    assert.throws(() => sorter.stringsHandler([]), Error(EMPTY_ARRAY_ERROR_MESSAGE), "Error messages are not the same!")
  });

  it("Should delete duplicates in the sorted array", () => {
    expect(sorter.stringsHandler(["teach", "me", "skills", "me"])).to.be.deep.equal(["me", "skills", "teach"], SORTING_ERROR_MESSAGE);
  });

  after(() => {
    sorter = null;
  });
})