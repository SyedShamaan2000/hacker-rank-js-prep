// Write a function multiply that takes two numbers and returns their product.
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
// console.log(multiplyNumbers(4, 7));  // Output: 28

// Create a function maxOfTwo that returns the maximum of two numbers.
function maxOfTwo(num1, num2) {
    if(num1>num2) {
        return num1;
    } else {
        return num2;
    }
}
// console.log(maxOfTwo(87, 45));  // Output: 87

// Write a function reverseString that takes a string and returns it reversed.
function reverseString(str) {
    return str.split("").reverse().join("");
}
// console.log(reverseString("hello"));  // Output: olleh

// Create a function concatStrings that takes two strings and returns them concatenated.
function concatStrings(str1, str2) {
    return str1 + " " + str2;
}
// console.log(concatStrings("hello", "world"));  // Output: hello world

// Write a function calculateRectangleArea that takes width and height as parameters and returns the area.
function calculateRectangleArea(width, height) {
    return width * height;
}
// console.log(calculateRectangleArea(4, 5));  // Output: 20