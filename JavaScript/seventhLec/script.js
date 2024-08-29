// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "lightpink"

// div.style.fontFamily = "Arial";

// let button = document.createElement("button");
// button.innerText = "click me!";
// div.after(button);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>New Heading</i>";

// let div = document.querySelector("div");

// div.before(newHeading);

// let para = document.querySelector("p");

// para.remove();

let button = document.createElement("button");
button.textContent = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);