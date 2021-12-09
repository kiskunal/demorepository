const fs = require("fs");

console.log(1);
fs.writeFile("./notes.txt","Hello World",()=> {
    console.log(3);
})

console.log(2);l