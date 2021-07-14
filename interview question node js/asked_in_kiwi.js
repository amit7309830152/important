// reverse an string asked in kiwitech
// let a = 'amitkumar';

// for (let i = a.length - 1; i >= 0; i--) {
//     console.log(a.charAt(i))
// }

// can also be done like

// console.log(a.split('').reverse().join(""))

// console.log([...a].reverse().join(""))




// print age of > 20 object


// let arr = [{
//     name: 'amit',
//     age: 19
// }, {
//     name: 'sumit',
//     age: 24
// }, {
//     name: 'hello',
//     age: 25
// }]

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i].age > 20) {
//         console.log(arr[i])
//     }

// }

// correct solution
// finalar = arr.filter((e, i) => {

//     if (arr[i].age > 20) {
//         return false
//     }
//     return true
// })


// const arr = ["aa", "bb"]
//     //  can be modify or not
// arr.push('tt')
// arr.pop()
// arr.pop()
// console.log(arr)

setTimeout(
    () => {
        console.log('set timeout')
    },
    0
)

setInterval(() => {
    console.log('setInterval');
}, 0);

setImmediate(() => {
    console.log('setImmediate');
})

process.nextTick(() => {
    console.log('nexttick');
})