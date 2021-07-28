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

// function Logger(logString: string) {
//     console.log('logger');
//     return function (construction: Function) {
//         console.log('logger construction');
//     }
// }

// function Print(print: string) {
//     console.log('Print');
//     return function (construction: Function) {
//         console.log('Print construction');
//     }
// }

// @Print('Print-Person')
// @Logger('Logging-Person')
// class Person {
//     name = 'max';

//     constructor() {
//         console.log('creation of person');
//     }
// }
// const per = new Person()

// output of the 
// Print
// logger
// logger construction
// Print construction
// creation of person

// compiler complile the code from top to bottom
// But execution of decorator take place from bottom up

// -----------------------Property decorator---------------

//- the type of argument decortor get it depends on the where we use it
// -two para 1. target 2. name of the property
// function Print(target: any, propertyName: string) {
//     console.log("propertyName");
//     console.log(propertyName);
//     console.log(target);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log("Log2");
//     console.log(name);
//     console.log(descriptor);
// }

// function Log3(
//     target: any,
//     name: string | Symbol,
//     descriptor: PropertyDescriptor
// ) {
//     console.log('Method decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }


// function Log4(target: any, name: string | Symbol, position: number) {
//     console.log('Parameter decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }
// // function Log(target: any)

// class Person {

//     @Print
//     name = 'max';
//     age = 12;
//     _price = 0;

//     constructor(t: string, p: number) {
//         this._price = p;
//     }

//     @Log2
//     set price(val: number) {
//         this._price = val
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax: number) {
//         return this._price * (1 + tax);
//     }
// }
// const per = new Person()


// -------------------Returning value and changing a class-------------------

// function WithTemplate(template: string, hookId: string) {
//     console.log(template);
//     console.log(hookId);

// }

function WithTemplate(one: any, two: any) {
    console.log('TEMPLATE FACTORY');
    // return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        console.log('run internal funciton');
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super()
                console.log('decorator para');
                console.log(one);
                console.log(two);
            }
        }
    }
}


@WithTemplate('send one para', 'send two para')
class Person {
    name = 'max';
    constructor() {
        console.log('Person constructor');
    }

    display(data: any) {
        console.log(data);
    }

}

const p = new Person()

