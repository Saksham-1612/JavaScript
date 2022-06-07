var User= function (firstName, courseCount){
    this.firstName= firstName;
    this.courseCount= courseCount;
    this.getCourseCount= function () {
    console.log(`Course-Count: ${this.courseCount}`);
    };
}
User.prototype.getFirstName= function (firstName) {console.log(`First Name: ${this.firstName}`);};
var Saksham=new User("Saksham",2);
if (Saksham.hasOwnProperty("firstName")) {
    Saksham.getFirstName();
    
}
// Saksham.getFirstName();
Saksham.getCourseCount();
