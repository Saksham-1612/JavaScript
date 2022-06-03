var user={
    firstName:"Saksham",
    lastName:"Srivastava",
    role: "administrator",
    login: 32,
    isLoggedIn:true
}
console.log(user.firstName);
console.log(user["lastName"]);
// console.log(user.login);
user.login=42;
console.log(user.login);
console.table(user);
