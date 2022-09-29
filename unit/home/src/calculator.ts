export class Calculator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    public sum(firstArg: number, secondArg: number): number {
        return firstArg + secondArg;
    }

    public subtract(firstArg: number, secondArg: number): number {
        return firstArg - secondArg;
    }

    public multiply(firstArg: number, secondArg: number): number {
        return firstArg * secondArg;
    }

    public divide(firstArg: number, secondArg: number): number {
        return firstArg / secondArg;
    }
}
