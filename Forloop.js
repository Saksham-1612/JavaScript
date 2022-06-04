const myStates=[
    "Delhi",
    "UttarPradesh",
    "RAJASTHAN",
    1947
];
for (let index = 0; index < myStates.length; index++) 
{
    const element = myStates[index];
    if(typeof(myStates[index])!="string")
    {
    continue;
    }
    console.log(element);
}