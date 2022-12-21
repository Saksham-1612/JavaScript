console.log("hello");
setTimeout(() => {
    console.log("after 3");
}, 3000);
console.log("1");

let prom= new Promise((resolve, reject) => { 
    console.log("Hii I am in promise");
    resolve(56)
 })
console.log(prom);