// Diffrent ways to create objects
var User = {
    name: "",
    getName: function() {
        console.log(this.name);
    },
};

var Saksham=Object.create(User);
console.log(Saksham);
// Works diffrently with Different Engines
Saksham.name = "Saksham";
Saksham.getName();


var sam=Object.create(User,{
    name:{value:"Sam"},
});
