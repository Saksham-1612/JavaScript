const courses=[
    {
        name:"Complete React Course",
        price:"2.5$"
    },
    {
        name:"Complete Angular Course",
        price:"4.5$"
    },
    {
        name:"Complete Vue Course",
        price:"4.2$"
    },
    {
        name:"Complete NodeJS Course",
        price:"5.4$"
    },
];
function generateLIST(){
    const ul =document.querySelector(".list-group");
    courses.forEach((course)=>{
        const li=document.createElement("li");
        li.classList.add("list-group-item");
        const name =document.createTextNode(course.name);
        li.appendChild(name);
        const span = document.createElement("span");
        span.classList.add("float-right");
        const price=document.createTextNode("$"+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateCourses();
window.addEventListener("load",generateLIST);

const button =document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=>(a.price-b.price))
    generateLIST();
})