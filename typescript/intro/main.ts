// in the message var it would show the error 'cannot redeclare the message' 
// this is because it is the script it has the global scope but module as the module scope we make the script to module by using export {}

export { }

// let message = 'welcome back ..';
// console.log(message);

// let x= 10
// const y = 23

// datatype

// boolean
// number
// string

// let isB: boolean = true;
// let isS:string = 'amit';
// let isN:number = 23;

// let n: null = null;

// let u: undefined = undefined;

// array type 1 declaration
// let list1:number[] = [1,2,3]

// array type 2 declaration
// let list2: Array<number> = [1,2,5]

// array with multi type
// let list3:[string, number] = ['amit',2,3]

// array with multi type
// let list4:[string, number] = ['amit',2]


// enum type to give the freindly name
// enum color {red=5,green,blue}

// let c:color  = color.green

// console.log(c); // 6

// any type variable
//  let random:any[] = [56,'amit',true];
//  let random:any = 56;
//  random = 'amdit';
//  random = true

// random();
// console.log(random.name);

//  let random:unknown = 56;
// 3.o in ts there is new type unknown
// ((random as string)).toUpperCase();


// type assertion is like type casting

// let b =23 // here ts will assign the b as number type
// b = true // here you will find error


// | is pipe character
// let multitype : number|boolean = 23
// multitype = true // now it will not show the error


// function in ts

// function add(num1:number,num2:number):number {
//     return num1+num2
// }


// arrow funciton
// const add = (num1:number,num2:number):number => {
//     return num1+num2
// }

// with optional parameter
// const add = (num1:number,num2?:number):number => {
//     if(num2) {
//         return num1+num2
//     } else {
//         return num1
//     }
// }

// default paramenter
// const add = (num1:number,num2:number = 10):number => {
//     if(num2) {
//         return num1+num2
//     } else {
//         return num1
//     }
// }

// console.log(add(3));

// we can also pass the object in the function para

// const fullname  =(person:Person)=> {
// console.log(`${person.fname} ${person.lname}`);
// }

// // interface

// interface Person {
//     fname:string;
//     lname:string
// }

// fullname({fname:'amit',lname:'kumar'})

// Ts is static type checker which checksor detect the error before runnning the code

// let obj = {width:10,height:20}

// console.log(obj.width*obj.hffs); // error is found here itself



// -----------------------------interface--------------------------------//


// what is interface

// An Interface is a structure which acts as a contract in our application. It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members. The interface contains only the declaration of the methods and fields, but not the implementation.

// also use to define the object shape

// For example

// to make the is_available optional we ca simply
// interface Product {
//     id:number,
//     name:string,
//     description:string,
//     price:number
//     qty:number,
//     max_qty:number,
//     min_qty:number,
//     is_available:boolean
// }

// const product1 :Product = {
//     id:1,
//     name:'string',
//     description:'string',
//     price:234,
//     qty:50,
//     max_qty:1,
//     min_qty:1,
//     is_available:true
// }

// ---------------------Utility types-----------------------------

//  -----------partial------------

// If you do not want to make the change in interface

// const product1 :Partial<Product> = {
//     id:1,
//     name:'string',
//     description:'string',
//     price:234,
//     qty:50,
//     max_qty:1,
//     min_qty:1,
// }

// here no need to give the is_available as using partial



interface Product {
    id: number,
    name: string,
}

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

let combineValue: (n1: number, n2: number) => number

// -----------------UNKNOWN--------------
// let userT :unknown;

// let userName:string;

// userName = userT // ERROR : Type 'unknown' is not assignable to type 'string'. 




