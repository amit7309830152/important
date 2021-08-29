// interview of algowork

// sum = (num) => {
//     total = (num * (num + 1)) / 2
//     return total
// }
// console.log(sum(50))

// let i;
// for (i = 0; i < 3; i++) {
//     ((i) => {
//         const log = () => {
//             console.log(i);
//         }
//         setTimeout(function() { log() }, 100);
//     })(i)
// }

// i = 0 log(0) 0
// i = 1 log(1) 1
// i = 2 log(2) 2 3


// reverse = (str) => {
//     str2 = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2 += str.charAt(i)
//     }
//     return str2
// }


reverse = (str) => {
    let i = str.length - 1
    str2 = ''
    mid = str.length / 2
    while (i >= str.length / 2) {
        c1 = str.charAt(str.length - 1 - i)
        c2 = str.charAt(i)
        str = str.split('')
        str[str.length - 1 - i] = c2
        str[i] = c1
        str = str.join('')
        i--
    }
    return str
}

console.log(reverse('amit kumar'));

// console.log('amit kuamr'.replaceAt(0, 'yy'));

// sql = 'select max(salary) from sal where salary > max(salary)'