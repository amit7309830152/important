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
