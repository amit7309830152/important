// 40
// 39
// 38

// second highest and third highest
// sqlHighestSal = 'select salary from emp where salary < MAX(salary) limit 1 offset 1'



// make rute file of employee

// route.post('/employee',(req,res)=>{
// let username = req.body.username
// let password = req.body.password
// let detail = req.body.detail
// // to save the detail 
// try {
// res.status(201).send('data is saved ')
// }
// catch{
// res.status(500).send('error in saving ')
// }


// })

// route.get('/employee',auth,(req,res)=>{
// // to get all the detail of the employee
//     try {
//     res.status(200).send(detail)
//     }
//     catch {
//     res.status(400).send('error')
//     }

// })

// route.get('/detail/:id',auth,(req,res)=>{
// let id = req.query.id
//     fetch detail by using this id
//     try {
//     res.status(200).send(detail)
//     }
//     catch {
//     res.status(400).send('error')
//     }
// })


//- Express features
// Allow middilewares
// route 
// template engine hbs, ejs,pug


// next in route
// The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.


// request.js
// cors
// uncought error how to handle it
// handle try catch in route level
// event loop concept consele.log() fetch angain log explain this codein the event loop

// function splice and slice
// reflect in express
// tail function in express
// generator .js 
// limit and offset
// what is step holding.

// 1. Generators are the function 
// - let you suspend the function execution
// - simplifies the creation of the iterators
// function* gen() {
//     yield 1
//     yield 2
//     yield 3
//     return 'return'
// }

// const genObj = gen()

// console.log(genObj.next()); //{ value: 1, done: false }
// console.log(genObj.next()); //{ value: 2, done: false }
// console.log(genObj.next()); //{ value: 3, done: false }
// console.log(genObj.next()); //{ value: 'return', done: true }     
// console.log(genObj.next()); //{ value: undefined, done: true }    
// console.log(genObj.next()); //{ value: undefined, done: true }


// final round

// const result = [20, 9, 17, 18].find(async(item) => {

//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             res(true);
//         }, 0);
//     });

//     return item % 2 !== 1;
// })

// find(async(item)) in this line find expects a boolean but it will return the boolean promise which will always true the async funciton alway return the promise.

// it will return 20 in all the case because line number 3 will return the boolean promise , now 
// for the find function it will be always true.


// // const result = [20, 9, 17, 18].find((item) => {
// //     return item % 2 !== 0;
// // });


// console.log(result);
// // t f f t



// async function callMe(item) {

//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             res(true);
//         }, item * 100);
//     });

//     return item % 2 !== 1;
// }

// const output = callMe(19);
// console.log(output);


// const result = [20, 9, 17, 18].find((item) => {

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(true);
//         }, item * 100);
//     }).then(() => {
//         return item % 2 !== 1;
//     });
// })

// question 
// 1.composite key 
// 2.many to many in user and business
// 3.find function in the array

// tried
// sql = `select name, department from emp order by name limit 25 offset 50`
// sqlThird = `select salary from emp order by salary desc limit 1 offset 2`
// sql = `select name, department from emp where salary = '${resultThird}' order by name`

// Answer nth highest ssalary
// SELECT * FROM business_menu_item
// SELECT DISTINCT price FROM business_menu_item ORDER BY price ASC LIMIT 1 OFFSET 2
// SELECT * FROM business_menu_item WHERE price = (SELECT DISTINCT price FROM business_menu_item ORDER BY price ASC LIMIT 1 OFFSET 2)