import assert from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

const ASSERTION_ERROR_MESSAGE = "Result of calculation is not as expected";
const calculator = new Calculator();

describe("Calculator tests", () => {
    describe("Tests for a sum function", () => {
        it("Should sum two positive numbers correctly", () => {
            assert.deepStrictEqual(calculator.sum(6, 12), 18, ASSERTION_ERROR_MESSAGE);
        });

        it("Should sum two negative numbers correctly", () => {
            assert.deepStrictEqual(calculator.sum(-45, -15), -60, ASSERTION_ERROR_MESSAGE);
        });

        it("Should sum positive and negative numbers correctly", () => {
            assert.deepStrictEqual(calculator.sum(136, -24), 112, ASSERTION_ERROR_MESSAGE);
        });

        it("Should sum two float numbers correctly", () => {
            assert.deepStrictEqual(calculator.sum(16.8, 29.3), 46.1, ASSERTION_ERROR_MESSAGE);
        });
    })

    describe("Tests for a subtract function", () => {
        it("Should subtract two positive numbers correctly", () => {
            assert.deepStrictEqual(calculator.subtract(26, 18), 8, ASSERTION_ERROR_MESSAGE);
        });

        it("Should subtract two negative numbers correctly", () => {
            assert.deepStrictEqual(calculator.subtract(-30, -150), 120, ASSERTION_ERROR_MESSAGE);
        });

        it("Should subtract positive and negative numbers correctly", () => {
            assert.deepStrictEqual(calculator.subtract(64, -9), 73, ASSERTION_ERROR_MESSAGE);
        });

        it("Should subtract two float numbers correctly", () => {
            assert.deepStrictEqual(calculator.subtract(18.3, 9.4), 8.9, ASSERTION_ERROR_MESSAGE);
        });
    })

    describe("Tests for a multiply function", () => {
        it("Should multiply two positive numbers correctly", () => {
            expect(calculator.multiply(15, 6)).to.be.deep.equal((90), ASSERTION_ERROR_MESSAGE);
        });

        it("Should multiply two negative numbers correctly", () => {
            expect(calculator.multiply(-12, -11)).to.be.deep.equal((132), ASSERTION_ERROR_MESSAGE);
        });

        it("Should multiply positive and negative numbers correctly", () => {
            expect(calculator.multiply(24, -3)).to.be.deep.equal((-72), ASSERTION_ERROR_MESSAGE);
        });

        it("Should multiply two float numbers correctly", () => {
            expect(calculator.multiply(19.5, 1.5)).to.be.deep.equal((29.25), ASSERTION_ERROR_MESSAGE);
        });
    })

    describe("Tests for a divide function", () => {
        it("Should divide two positive numbers correctly", () => {
            expect(calculator.divide(1604, 4)).to.be.deep.equal((401), ASSERTION_ERROR_MESSAGE);
        });

        it("Should divide two negative numbers correctly", () => {
            expect(calculator.divide(-144, -12)).to.be.deep.equal((12), ASSERTION_ERROR_MESSAGE);
        });

        it("Should divide positive and negative numbers correctly", () => {
            expect(calculator.divide(175, -25)).to.be.deep.equal((-7), ASSERTION_ERROR_MESSAGE);
        });

        it("Should divide two float numbers correctly", () => {
            expect(calculator.divide(16.4, 4.1)).to.be.deep.equal((4), ASSERTION_ERROR_MESSAGE);
        });
    })
})
