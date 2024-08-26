
//simple for loop
for(let i = 1; i<=5; i++) {
    console.log("Akshat Pandey")
}

//simple while lopp
let i = 1;
while(i <= 5) {
    console.log("i =", i);
    i++;
}

//also do whie loop

//for-of loop
// let str = "Tony";

// for(let val of str) {
//     console.log(val);
// }

//for-in loop
// let student = {
//     name: "Akshat Pandey",
//     age: 21,
//     cgpa: 7
// }

// for(let key in student) {
//     console.log("key =", key, ", value =", student[key]);
// }

// let str = "0123456789"
// console.log(str.slice(1, 6));

let fullName = prompt("Enter your full name");

let start = "@";

let end = fullName.length;

let userName = start + fullName + end;

console.log("UserName for you -", userName);

