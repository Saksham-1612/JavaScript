var red =document.querySelector(".red");
var pink =document.querySelector(".pink");
var cyan =document.querySelector(".cyan");
var orange =document.querySelector(".orange");
var voilet =document.querySelector(".voilet");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(cyan).background);
const getBgColor = (selectedElement)=>{
    // return window.getComputedStyle(cyan).backgroundColor;
    return getComputedStyle(selectedElement).backgroundColor;
};
getBgColor(pink);
console.log(getBgColor(pink));