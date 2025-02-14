// Write a function greetUser with a default parameter "Guest" if no name is given.
// without setting the default parameter
function greetUserWithoutParam(name) {
    if(!name) {
        return `Hi Guest`;
    } else {
        return `Hi ${name}`
    }
}
// console.log(greetUserWithoutParam());  // Hi Guest
// console.log(greetUserWithoutParam("Alice")); // Hi Alice
function greetUserWithtParam(name="Guest") {
    return `Hello ${name}`;
}
// console.log(greetUserWithtParam());  // Output: Hello Guest
// console.log(greetUserWithtParam("Sunil"));  // Output: Hello Sunil

// Create a function power that takes two numbers, 
// a base and exponent, with a default exponent of 2.
function powerNumber(base, exponent=2) {
    return base**exponent;
}
// console.log(powerNumber(3));  // Output: 9
// console.log(powerNumber(2, 5));  // Output: 32

// Convert the add function into a function expression.
// Create a function add that takes two numbers as parameters and returns their sum.
const addNumbers = function(num1, num2) {
    return num1 + num2;
}
// console.log(addNumbers(42, 74));  // Output: 116

// Convert the isEven function into an arrow function.
const isEven = (number) => {
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isEven(4)); // Output: true

// Write a function expression isPositive that returns true if a number is positive.
const isPositive = function (number) {
    if(number===0) {
        return `${number} is neither positive nor negative.`
    } else if (number>1) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPositive(-4)); // Output: false