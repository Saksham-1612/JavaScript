// Async Await in javascript
// function can be ASYNC
//  promises are awaited

async function Weather()
{
    let delhiWeather= new Promise((resolve, reject) => { 
        setTimeout(() => {
        resolve("27 deg")  
        },1000);
    })
    let kanpurWeather= new Promise((resolve, reject) => { 
        setTimeout(() => {
        resolve("21 deg")  
        },1000);
    })
    // delhiWeather.then((value)=>{console.log(value);})
    // kanpurWeather.then((value)=>{console.log(value);})
    console.log("fetching delhi ....");
    let delhiW=await delhiWeather;
    console.log("fetched delhi ....");
    console.log("fetching Kanpur....");
    let knpW=await kanpurWeather;
    console.log("fetched Kanpur....");
    return [delhiW,knpW];
 }
console.log("Welcome to weather app");
let a=Weather()
console.log(a);




