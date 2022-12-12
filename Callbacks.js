loadScript=(src, callback)=>{
    var script =document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
    script.onload=()=>{
        console.log(`Loaded Script with ${src}`);
        callback("saksham");
    };
}

hello=(name)=>{
    console.log(`Good Morning`);
    alert(`Morning ${name} `)
};
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello);
