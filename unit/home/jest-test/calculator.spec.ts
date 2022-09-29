import { expect } from "@jest/globals";
import { Calculator } from "../src/calculator"

const calculator = new Calculator;

describe("Tests for a sum function", () => {
    test("Should sum two positive numbers correctly", () => {
        expect(calculator.sum(3, 65)).toStrictEqual(68);
    });

    test("Should sum two negative numbers correctly", () => {
        expect(calculator.sum(-90, -15)).toStrictEqual(-105);
    });

    test("Should sum positive and negative numbers correctly", () => {
        expect(calculator.sum(136, -24)).toStrictEqual(112);
    });

    test("Should sum two float numbers correctly", () => {
        expect(calculator.sum(16.8, 29.3)).toStrictEqual(46.1);
    });
});

describe("Tests for a subtract function", () => {
    test("Should subtract two positive numbers correctly", () => {
        expect(calculator.subtract(26, 18)).toStrictEqual(8);
    });

    test("Should sustract two negative numbers correctly", () => {
        expect(calculator.subtract(-30, -150)).toStrictEqual(120);
    });

    test("Should subtract positive and negative numbers correctly", () => {
        expect(calculator.subtract(64, -9)).toStrictEqual(73);
    });

    test("Should subtract two float numbers correctly", () => {
        expect(calculator.subtract(18.3, 9.4)).toStrictEqual(8.9);
    });
});

describe("Tests for a multiply function", () => {
    test("Should multiply two positive numbers correctly", () => {
        expect(calculator.multiply(15, 6)).toStrictEqual(90);
    });

    test("Should multiply two negative numbers correctly", () => {
        expect(calculator.multiply(-12, -11)).toStrictEqual(132);
    });

    test("Should multiply positive and negative numbers correctly", () => {
        expect(calculator.multiply(24, -3)).toStrictEqual(-72);
    });

    test("Should multiply two float numbers correctly", () => {
        expect(calculator.multiply(19.5, 1.5)).toStrictEqual(29.25);
    });
});

describe("Tests for a divide function", () => {
    test("Should divide two positive numbers correctly", () => {
        expect(calculator.divide(1604, 4)).toStrictEqual(401);
    });

    test("Should divide two negative numbers correctly", () => {
        expect(calculator.divide(-144, -12)).toStrictEqual(12);
    });

    test("Should divide positive and negative numbers correctly", () => {
        expect(calculator.divide(175, -25)).toStrictEqual(-7);
    });

    test("Should divide two float numbers correctly", () => {
        expect(calculator.divide(16.4, 4.1)).toStrictEqual(4);
    });
});
