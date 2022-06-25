// This is a simple calculator using javascript
// The results are display in the console


class Calculator {
    constructor() {
        this.add = function (a, b) {
            console.log(a + b);
        };
        this.subtract = function (a, b) {
            console.log(a - b);
        };
        this.multiply = function (a, b) {
            console.log(a * b);
        };
        this.divide = function (a, b) {
            console.log(a / b);
        };
    }
}

var myCalc= new Calculator();
// Input two numbers that need to be added in the bracket() e.g(2,4)
myCalc.add();
// Input two numbers that their difference need to be found in the bracket() e.g(4,2)
myCalc.subtract();
// Input two numbers that need to be multiplied e.g
myCalc.multiply();
// Input two numbers that you need to find their quotient
myCalc.divide();