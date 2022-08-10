export class Calculator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    public sum(number1: number, number2: number): number {
        return number1 + number2
    }

    public substract(number1: number, number2: number): number {
        return number1 - number2;
    }

    public multiply(number1: number, number2: number): number {
        return number1 * number2;
    }

    public divide(number1: number, number2: number): number {
        return number1 / number2;
    }
}
