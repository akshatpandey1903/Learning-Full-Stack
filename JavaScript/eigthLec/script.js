// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");

// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("You are inside the div");
// }

let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode = "light";

btn1.addEventListener("click", (e) => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});