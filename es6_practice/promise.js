// promise :- it is use same as it name , 
// it take a function which take two function resolve and reject according to which the calling functoin uses the then and catch


// function promised() {
//     return new Promise(function(resolve, reject) {
//         let err = true;
//         if (!err) {
//             resolve('code is accepted');
//         } else {
//             reject('Code is rejected');
//         }
//     });
// }

// promised().then(function(msg) {
//     console.log('running then with msg ' + msg);
// }).catch(function(msg) {
//     console.log('running catch with msg ' + msg);
// });

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        // this async function will return undefined because it runs after 2 sec so we use promise
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}



// this function return promise so we have to write in the resolve and reject i.e then and catch
// add(2, 3).then((sum) => {
//     console.log(sum);
//     add(sum, 3).then((sum2) => {
//         console.log(sum2);
//     })
// })

// other way of chaining the promise call

add(1, 1).then((sum) => {
    console.log(sum);
    return add(sum, 1);
}).then((sum2) => {
    console.log(sum2);
}).catch((err) => {
    console.log(`err ${err}`);
})