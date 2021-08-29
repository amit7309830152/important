"use strict";
// in the message var it would show the error 'cannot redeclare the message' 
// this is because it is the script it has the global scope but module as the module scope we make the script to module by using export {}
exports.__esModule = true;
//  -----------Readonly------------
// for only read
//  -----------Record<K,T>------------
// It is use to store by key and object 
// const products: Record <string,Product> = {
//     product1:{
//         id:1,
//         name:'product1'
//     },
//     product2:{
//         id:1,
//         name:'product1'
//     }
// }
//  -----------Pick------------
// It is use to create the new type from the existing type but only pick some
// interface Product {
//     id:number,
//     name:string,
// }
// type ProductName = Pick<Product,'name'> 
//  -----------Omit------------
// It is use to same as pick but here its omit
// type ProductId = Omit<Product,'name'> 
//  -----------Exclude------------
// It is use to same as pick but here its omit
// type AvailDrink = 'coffee'|'Tea'|'Orange';
// here defining the type but exclute tea
// let jamesDrinks : Exclude<AvailDrink,'Tea'>
// jamesDrinks = 'coffee'
// jamesDrinks = 'Tea' // error
// console.log(jamesDrinks);
// type v = null|undefined;
// let a:v = null
// console.log(a);
// -----------Unions-------------
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false
// type MyBool = true | false;
// -----------------Generics------------
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;
// Remember: Type annotations never change the runtime behavior of your program.
// -----------------Type Aliases-----------------
// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
// type Point = {
//     x: number;
//     y: number;
//   };
//   // Exactly the same as the earlier example
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 100, y: 100 });
// ----------------------Interfaces--------------------------
// An interface declaration is another way to name an object type:
// interface Point {
//     x: number;
//     y: number;
//   }
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 100, y: 100 });
// Just like when we used a type alias above, the example works just as if we had used an anonymous object type.
// ------------------Type Assertion-----------------
// It is use to the tell the compiler the type of the variable
// let t ;
// t = 'amit';
// (<string>t). // type assertion telling the compiler that it is of string type
// (t as string) // another way of assertion
// -----------------------Literal Types--------------------
// One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.
// let changingString = "Hello World";
// changingString = "Olá Mundo";
// // Because `changingString` can represent any possible string, that
// // is how TypeScript describes it in the type system
// changingString;
// let changingString: string
// const constantString = "Hello World";
// // Because `constantString` can only represent 1 possible string, it
// // has a literal type representation
// constantString;
// const constantString: "Hello World"
// let x:'hello' = 'hello';
// x = 'hello'
// x = 'hi' // error is not assign to type helle error
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
// function printText(s: string, alignment: "left" | "right" | "center") {
//   // ...
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
// ------------TUPLE TYPE----------------
// const person:{
//     name:string;
//     age:number;
//     role:[string,number]
// } = {
// name:'amit', 
// age:25,
// role:['engg',3]
// }
// -----------------CREATING THE FUNCTION TYPE--------------
var combineValue;
// -----------------UNKNOWN--------------
// let userT :unknown;
// let userName:string;
// userName = userT // ERROR : Type 'unknown' is not assignable to type 'string'. 
