// ------------------ Generic--------------------

// It give flexibily combine with the type safety
// Generic can be use in following
// ----Array------
// ----Promise------
// ----Own generic------

// telling the array the type of value it should store
export { }

// --------Array---------

// const name: Array<string> = ['amit']
// console.log(name[0].split(''));


// --------Promise---------
// const promise: Promise<string> = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Amit")
//     }, 1000);
// })

// promise.then((result) => {
//     console.log(result);
// })

// ----Own generic------

// making the merge function generic type as we dont know the which type of the data do the object contain
// function merge<T, U>(objA: T, objB: U) {
//     const objMerge: T | U = Object.assign(objA, objB)
//     return objMerge;
// }

// const mergedObj = merge({ age: 'max' }, { name: 'amit', hobbies: ['dancing', 'games', 'card collection '] })
// console.log(mergedObj);

// you can also tell the function call which type of value should the generic could accept
// for example

// merge<{about first object},{about second object}>
// const mergedObj2 = merge<{ age: number }, { name: string, hobbies: string[] }>({ age: 33 }, { name: 'amit', hobbies: ['dancing', 'games', 'card collection '] })
// but it can be automatically done by the type inference 
// console.log(mergedObj2);

// -------------Type constrainst in the generic-----------

// function merge<T extends object, U extends object>(objA: T, objB: U) { // now T and U will accept any value but it should be the object
//     const objMerge: T | U = Object.assign(objA, objB)
//     return objMerge;
// }

// // const mergedObj2 = merge(33, { name: 'amit', hobbies: ['dancing', 'games', 'card collection '] }) //  will give you the error
// const mergedObj2 = merge({ age: 33 }, { name: 'amit', hobbies: ['dancing', 'games', 'card collection '] })
// console.log(mergedObj2);

// ----------Another generic function (Most important)-----------------------

// interface IStrLength {
//     length: number
// }
// function getLength<T extends IStrLength>(str: T) {
//     return str.length // here you wont be able to fetch the length property of the str .....this error will come to solve this we extends the string or length interface in the gereric
// }

// console.log(getLength('amit'));


// ---------------Generic key of--------------------
// More accurate way of getting the object and keys of that object only

// function getValue<T extends Object, U extends keyof T>(obj: T, key: U) {
//     return obj[key];
// }
// console.log(getValue({ name: 'amit', age: 26 }, "age"));

// ----------------Generic class --------------------
// -In this making the class generic 
// -It is use to store the strict data type suppport
// For example

// class DataStorage<T>{
//     // here it will get the string and this will be assign to all the other function where it is required
//     private data = [];

//     addItems(item: T) {
//         this.data.push(item)
//     }

//     removeItem(item: T) {
//         this.data.pop();
//     }
//     getItem() {
//         return this.data;
//     }
// }

// const objData = new DataStorage<string>()
// const objData = new DataStorage<string | number>()
// by defining the string type on the time of object creation , it will take only string type as the class has now become the string type because of generic
// objData.addItems("adsfasdf")
// console.log(objData.getItem());


// ----------------Utility type-------------------------

// - Extra type safety and extra flexibility

// -------------------Partial----------------------------
interface ICourseGoal {
    title: string;
    description: string;
    completeUntill: string;
}

function createCoarseGoal(title, description, completeUntill) {
    // making the property if I nterface optional
    let goal: Partial<ICourseGoal> = {
        title: 'Orm',
        description: 'sequalize',
    }
}


// -------------------Readonly----------------------------

// let goal: Readonly<string[]> = ['goal1', 'goal']

// goal.push('goal3')

// ---------------------Generic type and union type ----------------------
// Generic type :- if you want to lock the particular type
// Union type :- if you want to 