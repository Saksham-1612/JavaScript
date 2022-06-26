const fs = require('fs');
const files=fs.readFileSync('./');
console.log(files);

fs.readdir('./', function(err,files) {  
    if (err)
    console.log(err);
    else
    console.log(files); 
});
