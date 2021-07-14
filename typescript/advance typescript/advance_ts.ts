export {}

// ---------Conditional Types------------

type SomeType = string

type MyConditionalType = SomeType extends string ?string:null
// Above line means if SomeType is assignable to string then string or null
// if SomeType can take string then MyConditionType will become string else null

// function someFunction<T>(value:T) {
//     // if the has <T> then parameter should also be :T type 

//     const someOtherFunction = (someArg:T extends boolean?'TYPE A':'TYPE B') =>{
//         const a:'TYPE A'|'TYPE B'= someArg
//         // const a:'TYPE A'= someArg
//         // above line will error as it has to be type both type a and type b
//     }

//     return someOtherFunction

// }

// Nested condition
// function someFunction<T>(value:T) {
//     // if the has <T> then parameter should also be :T type 

//     type A = T extends boolean?'TYPE A': T extends string? 'TYPE B' :'TYPE C'
//     const someOtherFunction = (someArg:T extends boolean?'TYPE A':'TYPE B') =>{
//         const a:'TYPE A'|'TYPE B'= someArg
//         // const a:'TYPE A'= someArg
//         // above line will error as it has to be type both type a and type b
//     }

//     return someOtherFunction

// }

// const result = someFunction('true')
// here the type is type A 

// --------------Generic-----------
// It is use when there is no any confirmatino of particular type then we use generic so that it can accept any type of value

// function users(data) {
//     return data
// }

// console.log(users('return data'));

// Here it is simple passing and getting

// function users<T>(data:T):T {
//     // now here the type of value it will , same type of value it has to return 
//     return data
// }

// console.log(users(null));

// -------------------lookupType-----------------

// type person = {
//     name:string,
//     age:number,
//     city:string
// }

// function personName(name:person['name']):person['name'] {
//     return name
// }

// // this is the lookup person['name'] getting the type of inside
// console.log(personName('amit'));

// -------------------Mapped types-----------------

export type Point = {
    x:number,
    y:number
}


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


// ----------------records----------------------
