let stu = {
    name: 'amit',
    quali: 'btech',
    yr: '4'
}

// object values can be changed to array by the following ways
let stu_arr = Object.values(stu);
console.log(stu_arr);
console.log(typeof stu_arr);

// object can be changed to the string by using JSON.stringify
let object_in_string = JSON.stringify(stu);
console.log(`object_in_string  ${object_in_string}`);
console.log(`type of above is ${typeof object_in_string}`);