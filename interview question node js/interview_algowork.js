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



// display = () => {
//     for (var i = 0; i < 3; i++) {

//         ((i) => {
//             setTimeout(() => {
//                 console.log(i)
//             }, 100);
//         })(i)
//     }
// }

// display()



// reverse = (str) => {
//     str2 = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2 += str.charAt(i)
//     }
//     return str2
// }

//  reverse string by swapping
// reverse = (str) => {
//     let i = str.length - 1
//     str2 = ''
//     mid = str.length / 2
//     while (i >= str.length / 2) {
//         c1 = str.charAt(str.length - 1 - i)
//         c2 = str.charAt(i)
//         str = str.split('')
//         str[str.length - 1 - i] = c2
//         str[i] = c1
//         str = str.join('')
//         i--
//     }
//     return str
// }

// console.log(reverse('amit kumar'));

// console.log('amit kuamr'.replaceAt(0, 'yy'));

// sql = 'select max(salary) from sal where salary > max(salary)'

// str = "ASDSA12321ADEFEDAREWERA45654TRETR4"

// checkArr = []

// // console.log(str.substring(0, str.indexOf('A', 1) + 1));

// si = 0
// ei = 0

// for (let i = 0; i < str.length; i++) {
//     si = i
//     ei = str.indexOf(str.charAt(si), i)
//     console.log(ei);
//     checkArr.push(str.substring(si, ei + 1))
//     i = ei
//     console.log(i);
// }

// // console.log(checkArr);


// checkPalin = (str) => {
//     str2 = str
//     str2 = str.split('').reverse().join('')
//     if (str2 == str) {
//         return true
//     } else {
//         return false
//     }
// }

// // checkPalin('amit')

// max palindrome in string 

// str = "ASDSA12321ADEFEDAREWERA45654TRETR4"
// checkPalin = (str) => {
//     str2 = str
//     str2 = str.split('').reverse().join('')
//     if (str2 == str) {
//         return true
//     } else {
//         return false
//     }
// }

// maxL = -1
// for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//         if (checkPalin(str.substring(i, j + 1))) {
//             // console.log(str.substring(i, j + 1));
//             if (str.substring(i, j + 1).length > maxL) {
//                 max = str.substring(i, j + 1)
//                 maxL = str.substring(i, j + 1).length
//                     // st = 
//             }
//         }
//     }
// }

// console.log(max);