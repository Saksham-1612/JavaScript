// Login page authenticator
var isLoggedIn;
var isLoggedInFromGoogle=true;
var isLoggedInFromEmail=false;
var isloggedInFromGithub=false;
if(isloggedInFromGithub||isLoggedInFromEmail||isLoggedInFromGoogle)
{
    isLoggedIn=true;
}
if (isLoggedIn) {
    console.log("Login Success");    
}