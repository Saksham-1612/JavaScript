function tipper(bill)
{
    bill=parseInt(bill); // parseInt
    var tip= (bill/100)*20; 
    var finalBill= (bill+tip);
    console.log(`
    Your bill is : ${bill}
    Tip is : ${tip}
    Final Bill : ${finalBill}
    `)
}
bigTipper("200");
/* 
*Variables are having diffrent context
!var bigTipper=function (bill) 
{
    bill=parseInt(bill); // parseInt
    var tip= (bill/100)*40; 
    var finalBill= (bill+tip);
    console.log(`
    Your bill is : ${bill}
    Bigger Tip is : ${tip}
    Final Bill : ${finalBill}
    `)
}*/
function bigTipper(bill)
{
    bill=parseInt(bill); // parseInt
    var tip= (bill/100)*40; 
    var finalBill= (bill+tip);
    console.log(`
    Your bill is : ${bill}
    Bigger Tip is : ${tip}
    Final Bill : ${finalBill}
    `)
}
tipper("200");
// Undefined 
console.log(name);
var name="Saksham";