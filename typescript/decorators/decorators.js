// ------------------Decorators--------------------
// -It start whene the class is defined not when the class is initialize or the object is made.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function WithTemplate(one, two) {
    console.log('TEMPLATE FACTORY');
    // return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return function (originalConstructor) {
        console.log('run internal funciton');
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log('decorator para');
                console.log(one);
                console.log(two);
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'max';
        console.log('Person constructor');
    }
    Person.prototype.display = function (data) {
        console.log(data);
    };
    Person = __decorate([
        WithTemplate('send one para', 'send two para')
    ], Person);
    return Person;
}());
var p = new Person();
