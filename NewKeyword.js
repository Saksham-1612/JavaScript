var User= function (firstName, courseCount){
    this.firstName= firstName;
    this.courseCount= courseCount;
    this.getCourseCount= function () {
    console.log(`
        Name: ${this.firstName}
        Course-Count: ${this.courseCount}          
    `);
    };
}

var Saksham=new User("Saksham",2);
console.log(Saksham);
var sam =new User("sam",1)
console.log(sam);