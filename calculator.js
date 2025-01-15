/**
 * Calculator class providing basic mathematical operations
 */
class Calculator {
    constructor() {
        this.memory = 0;
        this.history = [];
    }

    /**
     * Adds two numbers
     * @param {number} a First number
     * @param {number} b Second number
     * @returns {number} Sum of a and b
     */
    add(a, b) {
        const result = a + b;
        this.recordHistory('add', a, b, result);
        return result;
    }

    /**
     * Subtracts two numbers
     * @param {number} a First number
     * @param {number} b Second number
     * @returns {number} Difference of a and b
     */
    subtract(a, b) {
        const result = a - b;
        this.recordHistory('subtract', a, b, result);
        return result;
    }

    /**
     * Multiplies two numbers
     * @param {number} a First number
     * @param {number} b Second number
     * @returns {number} Product of a and b
     */
    multiply(a, b) {
        const result = a * b;
        this.recordHistory('multiply', a, b, result);
        return result;
    }

    /**
     * Divides two numbers
     * @param {number} a First number
     * @param {number} b Second number
     * @returns {number} Quotient of a and b
     * @throws {Error} When dividing by zero
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        const result = a / b;
        this.recordHistory('divide', a, b, result);
        return result;
    }

    setMemory(value) {
        this.memory = value;
    }

    getMemory() {
        return this.memory;
    }

    clearMemory() {
        this.memory = 0;
    }

    recordHistory(operation, a, b, result) {
        this.history.push({
            operation,
            operands: [a, b],
            result,
            timestamp: new Date()
        });
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }
}

export default Calculator;