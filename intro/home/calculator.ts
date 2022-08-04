export function calculator(firstNumber: number, secondNumber: number, operation: '+' | '-' | '*' | '/' | '^') {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '^':
            return firstNumber ** secondNumber;
    }
}
