// All api of promise
let p1= new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve(1)
    }, 1000);
 })
let p2= new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve(2)
    }, 2000);
 })
let p3= new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve(3)
    }, 3000);
 })
// p1.then((value)=>{console.log(value);})
// p2.then((value)=>{console.log(value);})
// p3.then((value)=>{console.log(value);})
let promise_all=Promise.all([p1,p2,p3]); //if one promise is failed then nothing will be shown
promise_all.then((value)=>{
    console.log(value);
})
promise_all=Promise.allSettled([p1,p2,p3]);
promise_all.then((value)=>{console.log(value);})
