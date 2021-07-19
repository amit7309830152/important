// ------------------Decorators--------------------
// -It start whene the class is defined not when the class is initialize or the object is made.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function Logger(logString) {
    return function (construction) {
        console.log(logString);
        console.log(construction);
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'max';
        console.log('creation of person');
    }
    Person = __decorate([
        Logger('Logging-Person')
    ], Person);
    return Person;
}());
var per = new Person();
