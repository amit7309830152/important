// asycn fn always return the promise , while calling that fn we have to use the then and catch 
// to make the function async we only put the async keyword on the fn
// async fn definition has the some pending work for which we wait or put await call till it return
// the result 
// async fn only uses await ....we make the function async because it has something which 
// will take time to complete so on that thing we put the await , ensuring that only this is await
// will return the result then this funciton will return some thing 


const sum = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b);
        }, 2000);
    })
}
const add = async() => {
    return await sum(2, 3)
}
console.log(add().then(d => { console.log("sadfasd" + d) }));