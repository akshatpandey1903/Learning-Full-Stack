
// let arr = ["ironman", "hulk", "CaptainAmerica"];

// for (let i = 0; i < arr.length; ++i) {
//     console.log(arr[i]);
// } 

// for (let val of arr) {
//     console.log(val);
// }

// let marks = [97, 85, 44, 37, 76, 60];
// let sum = 0;
// for(let mark of marks) {
//     sum += mark;
// }

// console.log("Average marks =", sum/marks.length);

// let prices = [250, 645, 300, 900, 50];

// for(let i=0; i < prices.length; ++i) {
//     prices[i] = 90 * (prices[i] / 100);
// }

// console.log(prices);

// let marvelHeroes = ["IronMan", "Hulk", "CaptainAmerica"];
// let dcHeroes = ["Batman", "Superman"];

// let heroes = marvelHeroes.concat(dcHeroes);

// console.log(heroes);

// heroes.unshift("Spiderman");

// let deleted = heroes.shift();
// console.log("deleted -", deleted);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let deleted = companies.shift();

companies.splice(1, 1, "Ola");

companies.push("Amazon");