// var isEven=(element)=>{
//     // if(element%2==0) 
//     // return true;
//     // else
//     // return false;
//     return element%2==0;
// }
// console.log(isEven(2));
// var array = [2,3,5,6,];
// var result=array.every(isEven)
// // every() => actually checks for every number in array
// console.log(result);
var array = [2,4,8,6,];
var result=array.every((e)=>{
    return e%2 ===0;
})
// every() => actually checks for every number in array
console.log(result);
