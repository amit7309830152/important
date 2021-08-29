"use strict";
exports.__esModule = true;
// One way of making the point readonly
// type PointX  = {
//     readonly x:number,
//     readonly y:number,
// }
// another way
// export type ReadPoint = Readonly<Point>
// running the loop in the Point or working on each type of the type object then we use  mapped
//  type ReadPoint = {
//     readonly [Key in 'x'|'y']:string
//  }
// type ReadPoint<T> = {
//     readonly [key in keyof T]:T [key]
// }
// console.log(p);
// One way of making the point readonly
// const p:Readonly <Point> = {
//     x:0,
//     y:0
// }
// p.x= 1 // cant assign it give error
// type Properties = 'propA'|'propB';
// making it generic
// type MyMappedType<Properties extends string|number|symbol> = {
//     [P in Properties]:P
// }
// type MyNewType = MyMappedType<'propA'|'propB'>
// modify the above making it general
// type Properties = 'propA'|'propB';
// making the generic type and dynamic now we can assign any type here
// type MyMappedType<T> = {
//     // [P in keyof T]:T[P]
// //  readonly [P in keyof T]:T[P]  // making the property readonly
//     // [P in keyof T]?:T[P] // making the perperty optional 
//     // [P in keyof T]:T[P]|null // making the property null also 
// }
// type MyNewType = MyMappedType<{a:'a',b:'b',c :'c'}>
// --------------------picked from mapped----------------
// type Pick1 <T,Properties extends keyof T> = {
//     [P in Properties]:T[P]
// } 
// type Pick1 <T,Properties extends keyof T> = {
//     [P in Properties]:T[P]
// } 
// type MyNewType2 = Pick1<{a:'a',b:'b'},'a'>
// ------alternate of above---------
// type Person = {
//     name:string,
//     address:String
// }
// type PersonName = Pick<Person,'name'>
