var a = 2;
promise = new Promise((res, rej) => {
    return setTimeout(() => res(2), 1000)
})

promise.then((result) => {
    console.log(result)
    return result * 2
}).then((result) => {
    console.log(result)
    return result * 2
}).then((result) => {
    console.log(result)
    return result * 2
})