//Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log("a =", a, " & b =", b);

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a to the power b (a ** b) =", a ** b);

// Unary Operators
// Includes increment and decrement

let a = 5;

console.log("a++ (post) =", a++);
console.log("a =", a);
console.log("--a (pre) =", --a)

// Assignment Operator
// =, += , -=, *=, /=, %=

let b = 5;
b += 4;
console.log("b =", b);

// Comparison Operators
// ==, !=
// Stricter version ===, !==
// >, >=, <, <=

// Logical Operators
// && (Logical AND), || (Logical OR), ! (Logical NOT)

let n = prompt("Enter a number");

if (n % 5 === 0) {
    console.log("The number is a multiple of 5");
} else {
    console.log("The number is not a multiple of 5");
}