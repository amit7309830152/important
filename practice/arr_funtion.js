// let arr = [2, 3, 5, 6, 7, 8, 66, 77, 88];
// let result = arr.find(findgrt6);

// function findgrt6(value, index, array) {
//     return value > 6;
// }


//     arr = [1, 2, 3, 54, 6, 1, 2, 3]

// arr2 = arr.filter((ele, i, arr) => {
//     if (arr.indexOf(ele, i + 1) === -1) {
//         return ele
//     }
// })

// console.log(arr2)



// -Slice and splice :- both are the method of array

// slice
// arr.slice(index1 (include), index2(exclude))
// It is use to cut the slice and take it but excluding the last index

// arr = ['a', 'b', 'c', 'd', 'e']
// arr = arr.slice(1, 3)
// console.log(arr); // [b,c]


// splice :- it use to add and remove in the array
// arr.splice(index1, count_to_delete, add_string)
// arr.splice(1, 3, 'z') //[ 'a', 'z', 'e' ]
// console.log(arr);