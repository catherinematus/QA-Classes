import assert from "assert";
import { Calculator } from "../src/calculator";

const ASSERTION_ERROR_MESSAGE = "Result of calculation is not as expected";
const calculator = new Calculator;
const sumMap: Map<string, [number, number, number]> = new Map([
  ["Two positive numbers", [6, 12, 18]],
  ["Two negative numbers", [-45, -10, -55]],
  ["Positive and negative numbers", [8, -99, -91]],
  ["Two float numbers", [7.3, 9.1, 16.4]]
]);

describe("Calculator tests", () => {
  describe("Tests for a sum function", () => {
    sumMap.forEach((parameters, testCase) => {
      it(testCase, () => {
        assert.deepStrictEqual(calculator.sum(parameters[0], parameters[1]), parameters[2], ASSERTION_ERROR_MESSAGE);
      });
    });
  })
})
