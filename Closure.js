// Closure in JavaScript
function init(){
    var firstName="Saksham";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value=init();
value();

function doAddition(x) {
    return function (y){
        return x+y;
    }
}

var add=doAddition(5)(6);
console.log(add);
// var out=add(6);
// console.log(out);
