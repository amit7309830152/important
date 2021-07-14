/* 1.*/
// let a = true;
// let c = 1;
// setTimeout(() => {
//     a = false;
// }, 2000);

// while (a) {
//     console.log(++a);
// }

/* output - keep printing the ++a from while loop
thread is single and it is taken or busy for while loop
and a is to be false after 2 second is waiting to get the a to be false as the thread is busy
if the any for while or any synchrounous function is busy or keep running the it make the thread busy untill it finishes
solition we have to use the child process function like fork 
*/


/* 2.*/

// let a = true;
// let c = 1;
// setTimeout(() => {
//     a = false;
// }, 2000);

// setInterval(() => {
//     if (a) {
//         console.log(c++)
//     }
// }, 1999);

/* 
Now it will print till 2 second because it is not getting the thread block continously 
as it stop after the 200 ms and making the a false after the 2s result in the stopping the print.

*/

/* 3. */

// let a = true;
// let c = 1;


// let d = setInterval(() => {
//     if (a) {
//         console.log(c++)
//     }
// }, 200);

// setTimeout(() => {
//     clearInterval(d)
// }, 2000);

/* print till 2s */

/* 4. */

// setTimeout(() => {
//     console.log('set timeout')
// }, 0);

// console.log('hello console.log')

/* 
output:- 
hello console.log
set timeout

settimeout async funciton goes to event handler.
 */


/* 5 */
// console.log(2 + '2')
// op
// 22
// because + concate it thinking it is the string

// console.log(2 - '3')

// op
// 0

// because - can operate only on the number so it changes the '2' to number 2 and substract

/* 6 */

// remove duplicacy

// let num = [1, 2, 2, 3, 3, 5, 5]

// console.log(Array.from(new Set(num)))
// to convert into array

// console.log([...new Set(num)])
// can also use spread operator to convert in array

/* 7. */

// console.log(5 < 6 < 7)  true

// console.log(7 > 6 > 5);  suppose to be tru but false

// because true is converted into 1 while using > operator

/* 8 */

// do not alllow the object to add more property

// let o = {
//     name: 'amit'
// }

// Object.freeze(o)  do not allow to add any more property

// Object.seal(o) do not allow to add but can modify existing

// o.age = 26

// console.log(o)

/* 9 */
// console.log(Math.max())
// output is -infinity
// because it take the min number and start comparing and found -infinity is max