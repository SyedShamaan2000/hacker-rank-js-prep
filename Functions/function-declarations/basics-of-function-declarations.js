// Write a function greet that takes a name as a parameter and returns "Hello, [name]!".
function greet(name) {
    return `Hello, ${name}`;
}
// console.log(greet("Ahmed"));  // Output: Hello, Ahmed

// Create a function add that takes two numbers as parameters and returns their sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}
// console.log(addNumbers(45, 41));  // Output: 86

// Write a function isEven that takes a number and returns true if it is even, otherwise false.
function checkEven(number) {
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
}
// console.log(checkEven(5));  // Output: false

// Create a function square that takes a number and returns its square.
function squareNumber(number) {
    return number*number;
}
// console.log(squareNumber(6));  // Output: 36

// Write a function sayHello that prints "Hello, World!" without taking any parameters.
function sayHello() {
    return "Hello World";
}
// console.log(sayHello());  // Output: Hello World