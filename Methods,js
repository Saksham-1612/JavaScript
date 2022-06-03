var user={
    firstName:"Saksham",
    lastName:"Srivastava",
    role: "administrator",
    login: 32,
    isLoggedIn:true,
    courselist: [],
    buycourse: function (courseName) {
          this.courselist.push(courseName);
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in ${this.courselist.length}`
    },
    info: function() {
        console.log(`
        firstName: ${this.firstName}
        lastName: ${this.lastName}
        role: ${this.role}
        login: ${this.login}
        isLoggedIn: ${this.isLogged}
        NumberOfCourses: ${this.courselist.length}        
        `)
    }
};
console.log(user.firstName);
console.log(user.lastName);
console.log(user.getCourseCount())
user.buycourse("JAVASCRIPT");
console.log(user.getCourseCount())
user.info();