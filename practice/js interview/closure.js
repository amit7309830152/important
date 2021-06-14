 /* 
    it is the lexico scoping 
    inner funciton can get the fun and var of outer fucntion but not vice versa
    */


 /* 1 */

 //  for (let i = 0; i < 3; i++) {
 //      setTimeout(() => {
 //          console.log(i)
 //      }, 1000);
 //  }

 /* 
 output
0
1
2

it is because it has the block scope and also it the closure.
 */


 /* 2 */

 //  for (var i = 0; i < 3; i++) {
 //      setTimeout(() => {
 //          console.log(i)
 //      }, 1000);
 //  }

 /* 
 output
 3
 3
 3

 Because var is the funtion scope 
 afer updating the value of i it changes all the value of i in all the settimeout
 */

 /* To fixed above  */
 //  for (var i = 0; i < 3; i++) {
 //      ((i) => {
 //          setTimeout(() => {
 //              console.log(i)
 //          }, 1000);
 //      })(i)
 //  }

 /* 
 op
 0
 1
 2

 making the var as block scope and kind of binding
 */