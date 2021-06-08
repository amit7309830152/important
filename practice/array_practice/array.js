var numbers = [4, 9, 16, 25];
var name = ['amit', 'sumit', 'senior', 'junior'];

// array find

// name.find(ele => {
//     console.log(ele);
//     if(ele === 'amit')
//     return ele;
// });

//array from
// if you want to do some 
// console.log(Array.from(numbers, x =>x+x));


//array concat

// console.log(numbers.concat(name));

//array forEach

// numbers.forEach((element,index,array)=> {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// })

// every :- it returns the boolean which checks the condition which pass in the function
// var x = numbers.every(x => {
//   return x  >  4;
// })
// console.log(x);

// fill() :-  use to replace or fill the array elemnt from to to elemnt 
//  arr = numbers.fill(2,0,3);
//  console.log(arr);
// o/p 2,2,2,25


// map it is use to manupulate the element of the array and it return the array 
// ar = numbers.map(element => {
//     return(element * 2);
// })
// console.log(ar);

// reduce it is use to reduce the aray into a single number ,
// each time the accumulator will get update
// it take two argument one for call funciton and other for the initial value for the accumulator.

// ar = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//     return accumulator + currentValue;
// },0);

// console.log(ar);

// reduceRight()  it takes the array from the right and work same as the reduce
// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
//   );

//   console.log(array1);
//   // expected output: Array [4, 5, 2, 3, 0, 1]

// arayreverse it reverse the array element
// console.log(numbers.reverse());

// shift delete the array from the 0th index and return the deleted element
// console.log(numbers.shift());
// console.log(numbers);

// slice it returns the copy of the array with the slice of the array 

// console.log(numbers.slice(2,5));

// some() return true or false if atleast one element pass the test case, same as the each 

// sort() it sort the funciton 
// console.log(numbers.sort((a, b) => {
//     return a-b;
// }));

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// numbers.splice(1,1,'amit');
// console.log(numbers);

