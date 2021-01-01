// error check first

var data = fs.readFile("file.txt", (err, data) => { // this is the call back
    if (err) {
        console.log(err); //checking the error first this is error check first
        return;
    } else {
        console.log(data);
    }

})

// how can we avoid call back hell??
//  we should use promises

// What is promises use for?
// to deal with the async operation we make the use of 
// - callback function
// - promises
// - async and await


// Different bet yarn and npm?
// yarn: It stands for Yet Another Resource Negotiator and
//  it is a package manager just like npm. It was developed
//  by Facebook and is now open-source. The intention behind
//  developing yarn(at that time) was to fix performance and
//  security concerns with npm.

// How to handle the async function in node??
// what is enumeration?
// different bet callback and promise

// callback
// -it can call many times 

// promises
// -it can call only only once
// -it return resolve and reject
// function getApiData(){
//     // call some api related work

//     return new Promises((resole, reject)=>{
//         return resolve
//         or
//         return reject
//     })
// }

// what is process object and global object?
// It is the object which have details about the project and the node modules

// What is event emmitter?
// it is the use to create event and do some stuff on that particular event

// var eventEmitter = new EventSource.EventEmitter();
// eventEmitter.on('event1',()=>{
//     console.log('event is called');
// })

// eventEmitter.emit('event1');

// setimidiate settimeout nexttick?

// setImmediate is called just after the events and setTimeout is over
// Use setImmediate if you want to queue the function behind whatever I/O event callbacks that are already in the event queue.

// nextTick is is executed after the all event queue is over after all the setTimeout and setImmediate is over.
// Use process. nextTick to effectively queue the function at the head of the event queue so that it executes immediately after the current function completes

// What is linter tool?
// -It is the code analysis tool for js 
// -It checks the code for the quality and maintainability of the code
// -It check all the common mistakes
// - Two type of linter toolbar
// -JSLINT
// -JSHINT is more linient

// what is jwt
// json web token
// for the authentication login

// const jwt = require('jsonwebtoken');
// token = jwt.sign({ id: wer234 }, 'keyword_secret', { expireIn: 7 days })

// to verify it 
// data = jwt.verify(token,'keyword_secret');
// return data that is id:wer123