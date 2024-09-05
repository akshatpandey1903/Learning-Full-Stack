// ASYNCHRONOUS PROGRAMMING
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000); //timeout

// console.log("three");
// console.log("four");


// FUNCTION CALLBACK
// function sum(a, b) {
//     console.log(a + b);
// }

// function calc(a, b, sumCallBack){
//     sumCallBack(a, b);
// }

// calc(1, 2, sum);

//CALLBACK
function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
    });
}

//promise chain
// console.log("fetching data 1");
// getData(1).then((res) => {
//     console.log("fetching data 2");
//     return getData(2);
// }).then((res) => {
//     console.log("fetching data 3");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });

async function getAllData() {
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
}


// // callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

//PROMISE
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occured");
// });

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");   
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

//Promise chaining
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data 2")
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
// });

// console.log("fetching data 1");
// asyncFunc1().then((res) => {
//     console.log("fetching data 2")
//     asyncFunc2().then((res) => {});
// });