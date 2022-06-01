// *Discount Calculator

var sellingPrice=399;
var listPrice=799;
var Discount = ((listPrice-sellingPrice)/listPrice)*100;
console.log("Discount Percentage : " + Discount +"%");
displayDiscountPercent=Math.round(Discount);
console.log("Discount : "+displayDiscountPercent+"%")

// //var number1 = 7;
// //var number2= 10;

// //console.log(number1*number2);
// //var answer = number1>number2;
// //console.log(answer);