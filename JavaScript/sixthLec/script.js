// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let element = document.querySelector("p"); //1st matching elemnet
// console.dir(element);

// let allElements = document.querySelectorAll("p");
// console.dir(allElements);

// let div = document.querySelector("div");
// console.dir(div);

let heading = document.querySelector("h2");

heading.innerText = heading.innerText + " from Apna college";

let divs = document.querySelectorAll(".box");

let i = 1;
for(let div of divs) {
    div.innerText = `New Unique value ${i}`;
    i++;
}
