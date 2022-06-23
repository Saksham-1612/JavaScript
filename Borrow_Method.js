const saksham={
    firstName:"Saksham",
    lastName:"Srivastava",
    role:"Administrator",
    courseCount:4,
    getInfo:function(){
        console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Role: ${this.role}
        Course Count: ${this.courseCount}
        `);
    }
};

const krish={
    firstName:"Krish",
    lastName:"Srivastava",
    role:"Sub-Administrator",
    courseCount:8
};
saksham.getInfo();
var krishInfo=saksham.getInfo.bind(krish);
console.log(krishInfo);


saksham.getInfo();