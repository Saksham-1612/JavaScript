let p=fetch("http://api.weatherapi.com/v1/current.json?key=09bb7213beee41728d2173838222112&q=London&aqi=no")
p.then((value)=>{ return value.text})
p.then((value)=>{console.log(value);})
