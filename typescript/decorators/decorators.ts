// ------------------Decorators--------------------
// -It start whene the class is defined not when the class is initialize or the object is made.

// -type of decorator
// 1. class Decorators
// 2.Property Decorators
// 3.Method Decorators
// 4.Parameter Decorators


// function Logger(constructor: Function) {
//     // when the class is created this will automatic get called as it is the decorator
//     console.log('logger');
//     console.log(constructor);

// }

// @Logger
// class Person {
//     name = 'max';

//     constructor() {
//         console.log('creation of person');
//     }
// }
// const per = new Person()

// --------------------Factory Decorators----------------------
// - Main advantage is that we can pass the value
// - it returns the decorator function when we assign the decorators to do something
// - it is the type of functional based decorators
// - it returns the function 
// - now this will called as the function calling

function Logger(logString: string) {
    return function (construction: Function) {
        console.log(logString);
        console.log(construction);
    }
}

@Logger('Logging-Person')
class Person {
    name = 'max';

    constructor() {
        console.log('creation of person');
    }
}
const per = new Person()


