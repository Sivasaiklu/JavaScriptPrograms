// let promise = new Promise( (resolve, reject) => {
//     console.log("promise started");
// })

// let promise1 = new Promise( (resolve, reject) => {
//     console.log("promise1 started");
//     resolve("promise1 resolved, sucessfully");
// })

// let promise2 = new Promise( (resolve, reject) => {
//     console.log("promise2 started");
//     reject("promise1 rejected");
// })


// promises have two states: resolved and rejected 
// promises are asynchronous
// it has two methods: then and catch
// then is called when promise is resolved and catch is called when promise is rejected

const getPromise = () => {
    return new Promise( (resolve, reject) => {
        console.log("promise started");
        resolve("promise resolved, sucessfully");
    })
};

let promise = getPromise();
promise.then( (res) => {
    console.log('promise fulfilled', res);
})