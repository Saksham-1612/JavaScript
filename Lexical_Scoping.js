// Lexcial Scoping
function init(){
    var firstName="Saksham";
    function sayFirstName(firstName){
        console.log(firstName);
    }
    sayFirstName();
}

init();