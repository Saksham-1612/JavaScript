let p1= new Promise((resolve, reject) => { 
    console.log("Promise is pending");
    setTimeout(() =>  {
        console.log("Fullfilled promise")
        resolve(true)
        // reject(new Error ("I am an error"))
    }, 4000);
 })

p1.then(()=>{
    console.log("Hogya");
    // console.log(value);
})
let p2= new Promise((resolve, reject) => { 
    console.log("Promise2 is pending");
    setTimeout(() =>  {
        console.log("Fullfilled promise 2")
        // resolve(true)
        reject(new Error ("I am an error"))
    }, 4000);
 })
p2.catch((error)=>{
    console.log("some error in p2");
}),(error)=>{
    console.log("Error");
}
console.log(p1,p2);