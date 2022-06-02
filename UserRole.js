var getUserRole=function (name,role) {
    switch (role) {
        case "admin":
            return `${name} - gets ${role} role and he can access everything.`;
            break;
        case "sub-admin":
            return `${name} - gets ${role} role and he can access to create/delete.`;
            break;
        case "testprep":
            return `${name} - gets ${role} role and he can access to create/delete test.`;
            break;
        case "admin":
            return `${name} - gets ${role} role and he can access all courses.`;
            break;
    
        default:
            return `${name} - gets no ${role}.`;
            break;
        }
}
var getRole=getUserRole("Saksham","testprep");
console.log(getRole);